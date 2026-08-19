import { act, render } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { AGE_PRECISION_FULL, ageAt } from '@/lib/telemetry';

import profile from '../../profile.json';
import personalStats from '../../stats/personal';

// The build-time reading the server component measures and hands down. Fixed
// here so assertions do not depend on when the suite runs.
const INITIAL_AGE = ageAt(Date.UTC(2026, 0, 1), AGE_PRECISION_FULL);
const data = personalStats(INITIAL_AGE);

describe('personal stats data', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('exports an array of stats', () => {
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  it('carries the build-time reading, so the export ships a real number', () => {
    // The static export is what a reader without JavaScript gets. This row
    // used to reach them as `--.-----------` on the one page whose premise is
    // that its figures are measured.
    const codingStat = data.find((s) => s.key === 'years-coding');
    const html = renderToStaticMarkup(<>{codingStat!.value}</>);

    expect(html).toContain(INITIAL_AGE);
  });

  it('each stat has required properties', () => {
    for (const stat of data) {
      expect(stat).toHaveProperty('key');
      expect(stat).toHaveProperty('label');
      expect(typeof stat.label).toBe('string');
    }
  });

  it('has a years-coding stat with a React component', () => {
    const codingStat = data.find((s) => s.key === 'years-coding');

    expect(codingStat).toBeDefined();
    expect(codingStat!.label).toBe('Years writing code');
    // The value is a React element, not a string: it ticks live.
    expect(codingStat!.value).toBeDefined();
  });

  it('has a countries visited stat', () => {
    const countriesStat = data.find((s) => s.key === 'countries');

    expect(countriesStat).toBeDefined();
    expect(countriesStat!.label).toBe('Countries visited');
    // Asserted against the profile rather than a literal, so this pins the
    // wiring instead of one person's biography.
    expect(countriesStat!.value).toBe(profile.countriesVisited);
    expect(countriesStat!.link).toContain('google.com/maps');
  });

  it('has a current location stat', () => {
    const locationStat = data.find((s) => s.key === 'location');

    expect(locationStat).toBeDefined();
    expect(locationStat!.label).toBe('Current city');
    expect(locationStat!.value).toBe(profile.currentCity);
  });

  it('live readout renders and updates', () => {
    const codingStat = data.find((s) => s.key === 'years-coding');
    const AgeComponent = () => <>{codingStat!.value}</>;

    render(<AgeComponent />);

    // Advance timer to trigger age calculation
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // The age should be a number with decimal places
    const textContent = document.body.textContent || '';
    expect(textContent).toMatch(/\d+\.\d+/);
  });
});
