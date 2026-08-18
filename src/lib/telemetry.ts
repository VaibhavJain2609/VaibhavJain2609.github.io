import profile from '@/data/profile.json';

/**
 * Measured values shown on the stats page.
 *
 * The facts live in `src/data/profile.json` so that the OG generator, which
 * runs as a plain Node script and cannot import TypeScript, reads exactly the
 * same values.
 */

/**
 * The instant the live counter measures from, with an explicit offset.
 *
 * Without one this parsed as local time, so the readout shifted by hours
 * depending on where the visitor was — the whole point of the figure is that
 * it is the same measurement for everyone. +05:30 is IST.
 *
 * This is the first line of code written, not a birth date. A public page has
 * no business ticking someone's age at eleven decimal places, and years spent
 * writing code is the figure a reader of this site actually came for.
 */
export const CODING_SINCE = profile.codingSince;

/** Milliseconds in an average year, accounting for leap years. */
export const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2421897;

/** Year the first computer arrived in the bedroom. See `src/data/about.ts`. */
export const COMPUTING_SINCE = profile.computingSince;

/** Countries visited to date. */
export const COUNTRIES_VISITED = profile.countriesVisited;

/** Current home city. */
export const CURRENT_CITY = profile.currentCity;

/** Decimal places used by the stats page — absurd precision, on purpose. */
export const AGE_PRECISION_FULL = 11;

/** Fastest the readout is allowed to advance, in milliseconds. */
export const AGE_MIN_INTERVAL = 25;

/**
 * How often a readout at `precision` decimal places actually changes.
 *
 * The last displayed digit is worth `MS_PER_YEAR / 10^precision` ms, so at
 * eight decimals the value only moves about every 316ms. Ticking at a fixed
 * 25ms scheduled roughly twelve React renders per visible change, all of them
 * painting an identical string.
 *
 * This derivation only bites below about nine decimals. At
 * `AGE_PRECISION_FULL` the last digit turns over every ~0.32ms, so the floor
 * always wins and the timer runs at `AGE_MIN_INTERVAL` — 40 ticks a second,
 * every one of them a genuinely different string. That cadence is deliberate;
 * the blur is the point of the readout. It is affordable because `useLiveAge`
 * assigns the reading to a text node rather than routing it through React
 * state, so the cost of a tick is one `textContent` write and nothing else.
 */
export function ageIntervalFor(precision: number): number {
  const msPerDigit = MS_PER_YEAR / 10 ** precision;

  return Math.max(AGE_MIN_INTERVAL, Math.floor(msPerDigit));
}

/**
 * Age in years at a given instant, fixed to `precision` decimal places.
 *
 * Takes `now` rather than reading the clock so the result is deterministic
 * and testable.
 */
export function ageAt(now: number, precision: number): string {
  const epoch = new Date(CODING_SINCE).getTime();
  return ((now - epoch) / MS_PER_YEAR).toFixed(precision);
}

/*
 * There is deliberately no digit-free placeholder here any more. One used to
 * be rendered as the live readout's first paint, which meant the static export
 * — the version every scraper, feed reader, and recruiting tool sees — carried
 * `--.-----------` under the label "Years writing code". `ageAt` at a
 * build-time instant is the same width and is an actual measurement, so it
 * serves the same layout purpose while saying something true.
 */
