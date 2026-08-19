import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ageAt, CODING_SINCE, MS_PER_YEAR } from '@/lib/telemetry';
import useLiveAge from '../useLiveAge';

const TEST_PRECISION = 8;

/**
 * Stands in for the build-time reading a caller renders as the element's
 * content. Fixed instead of read from the clock so it is distinguishable from
 * anything the hook writes.
 */
const BUILT_AT = new Date(CODING_SINCE).getTime() + MS_PER_YEAR * 15;
const BUILT_READING = ageAt(BUILT_AT, TEST_PRECISION);

function LiveAge({ precision = TEST_PRECISION }: { precision?: number }) {
  const ref = useLiveAge<HTMLSpanElement>(precision);

  return (
    <span data-testid="live-age" ref={ref}>
      {ageAt(BUILT_AT, precision)}
    </span>
  );
}

/** Stubs matchMedia so the hook can read a reduced-motion preference. */
function setReducedMotion(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
  });
}

describe('useLiveAge', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    setReducedMotion(false);
    Object.defineProperty(document, 'hidden', {
      configurable: true,
      value: false,
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // The static export is what every reader without JavaScript gets, and that
  // is most automated readers. It used to carry `--.--------` under a label
  // promising a measured number.
  it('carries a real, same-width reading on the server', () => {
    const html = renderToStaticMarkup(<LiveAge />);
    const live = html.match(/data-testid="live-age">([^<]*)</)?.[1];

    expect(live).toBe(BUILT_READING);
    expect(live).toMatch(/^\d+\.\d+$/);
    expect(live).toHaveLength(ageAt(Date.now(), TEST_PRECISION).length);
  });

  it('replaces the build-time reading with a live one', () => {
    render(<LiveAge />);

    act(() => {
      vi.advanceTimersByTime(50);
    });

    expect(screen.getByTestId('live-age')).toHaveTextContent(/^\d+\.\d+$/);
  });

  it('respects the requested precision', () => {
    render(<LiveAge precision={5} />);

    act(() => {
      vi.advanceTimersByTime(50);
    });

    expect(screen.getByTestId('live-age')).toHaveTextContent(/^\d+\.\d{5}$/);
  });

  it('takes one reading under reduced motion instead of animating', () => {
    setReducedMotion(true);
    render(<LiveAge />);
    const settled = screen.getByTestId('live-age').textContent;

    expect(settled).toMatch(/^\d+\.\d+$/);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(screen.getByTestId('live-age')).toHaveTextContent(settled ?? '');
  });

  it('pauses while hidden and resynchronizes when the page returns', () => {
    render(<LiveAge />);

    act(() => {
      vi.advanceTimersByTime(400);
    });
    const beforeHide = screen.getByTestId('live-age').textContent;

    Object.defineProperty(document, 'hidden', {
      configurable: true,
      value: true,
    });
    fireEvent(document, new Event('visibilitychange'));
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(screen.getByTestId('live-age')).toHaveTextContent(beforeHide ?? '');

    Object.defineProperty(document, 'hidden', {
      configurable: true,
      value: false,
    });
    fireEvent(document, new Event('visibilitychange'));
    expect(screen.getByTestId('live-age').textContent).not.toBe(beforeHide);
  });

  it('advances the readout without re-rendering React', () => {
    // The whole point of writing to the text node directly. At the precision
    // the stats page uses the timer runs at the 25ms floor, so routing this
    // through state meant 40 React renders a second.
    let renders = 0;

    function Counted() {
      renders += 1;
      const ref = useLiveAge<HTMLSpanElement>(TEST_PRECISION);

      return (
        <span data-testid="live-age" ref={ref}>
          {ageAt(BUILT_AT, TEST_PRECISION)}
        </span>
      );
    }

    render(<Counted />);
    const rendersAfterMount = renders;
    const firstReading = screen.getByTestId('live-age').textContent;

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    // The reading moved...
    expect(screen.getByTestId('live-age')).toHaveTextContent(/^\d+\.\d+$/);
    expect(screen.getByTestId('live-age').textContent).not.toBe(firstReading);
    // ...and React never rendered again to make that happen.
    expect(renders).toBe(rendersAfterMount);
  });

  it('stops ticking when unmounted', () => {
    const clearInterval = vi.spyOn(globalThis, 'clearInterval');
    const { unmount } = render(<LiveAge />);

    unmount();

    expect(clearInterval).toHaveBeenCalled();
  });

  it('restores whatever the caller rendered, not a placeholder of its own', () => {
    // The hook writes out of band, so React does not know the text changed. If
    // unmount left the live reading behind, a remount would inherit a stale
    // one — and the hook has no business deciding what the content should be.
    render(<LiveAge />);
    const node = screen.getByTestId('live-age');

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(node.textContent).not.toBe(BUILT_READING);

    // `render` returns a fresh container each call, so unmount the tracked one.
    cleanup();

    expect(node.textContent).toBe(BUILT_READING);
  });
});
