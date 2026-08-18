'use client';

import useLiveAge from '@/hooks/useLiveAge';
import { AGE_PRECISION_FULL } from '@/lib/telemetry';

interface YearsCodingProps {
  /**
   * The reading taken when the page was built, rendered as this element's
   * content. `useLiveAge` overwrites it on mount and restores it on unmount.
   */
  initial: string;
}

/**
 * Time since the first line of code, at deliberately absurd precision.
 *
 * The `initial` reading is rendered rather than a digit-free placeholder,
 * because this element previously read `--.-----------` to every reader
 * without JavaScript — which is most automated readers, and every recruiter
 * tool that fetches the page rather than driving a browser. On the one page
 * whose premise is that its numbers are measured, that string is the opposite
 * of the claim being made.
 *
 * The build-time reading is a real measurement of the same quantity, taken at
 * a stated instant, and `toFixed` makes it exactly as wide as every later one
 * — so nothing reflows when the live value lands. It comes in as a prop from
 * the server component above rather than being read from the clock here:
 * calling `Date.now()` in a client module would evaluate once during the
 * export and again during hydration, and the two would disagree.
 */
export default function YearsCoding({ initial }: YearsCodingProps) {
  const ref = useLiveAge<HTMLSpanElement>(AGE_PRECISION_FULL);

  return (
    <span className="stat-live" ref={ref}>
      {initial}
    </span>
  );
}
