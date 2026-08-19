import { describe, expect, it } from 'vitest';

import {
  AGE_MIN_INTERVAL,
  AGE_PRECISION_FULL,
  ageAt,
  ageIntervalFor,
  CODING_SINCE,
  MS_PER_YEAR,
} from '../telemetry';

const COMPACT_PRECISION = 8;

describe('ageAt', () => {
  const epoch = new Date(CODING_SINCE).getTime();

  it('returns zero at the epoch itself', () => {
    expect(ageAt(epoch, 2)).toBe('0.00');
  });

  it('returns whole years after exact year intervals', () => {
    expect(ageAt(epoch + MS_PER_YEAR * 36, 4)).toBe('36.0000');
  });

  it('honours the requested precision', () => {
    const now = epoch + MS_PER_YEAR * 36.5;

    // Zero decimals rounds rather than truncates, so 36.5 reads as 37.
    expect(ageAt(now, 0)).toBe('37');
    expect(ageAt(now, COMPACT_PRECISION).split('.')[1]).toHaveLength(
      COMPACT_PRECISION,
    );
    expect(ageAt(now, AGE_PRECISION_FULL).split('.')[1]).toHaveLength(
      AGE_PRECISION_FULL,
    );
  });

  it('is deterministic for a given instant', () => {
    const now = epoch + MS_PER_YEAR * 12.345;

    expect(ageAt(now, 6)).toBe(ageAt(now, 6));
  });
});

describe('ageIntervalFor', () => {
  it('matches the cadence to the displayed precision', () => {
    expect(ageIntervalFor(COMPACT_PRECISION)).toBeGreaterThan(300);
    expect(ageIntervalFor(COMPACT_PRECISION)).toBeLessThan(320);
  });

  it('never schedules faster than the minimum interval', () => {
    expect(ageIntervalFor(AGE_PRECISION_FULL)).toBe(AGE_MIN_INTERVAL);
    expect(ageIntervalFor(20)).toBe(AGE_MIN_INTERVAL);
  });
});

describe('ageAt as the pre-JavaScript reading', () => {
  it('is the same width at every instant, so the live tick cannot reflow it', () => {
    const epoch = new Date(CODING_SINCE).getTime();
    const built = ageAt(epoch + MS_PER_YEAR * 15, AGE_PRECISION_FULL);
    const later = ageAt(epoch + MS_PER_YEAR * 15.9, AGE_PRECISION_FULL);

    expect(built).toHaveLength(later.length);
  });

  it('reads as a number, which a digit-free placeholder did not', () => {
    const epoch = new Date(CODING_SINCE).getTime();

    expect(ageAt(epoch + MS_PER_YEAR * 15, AGE_PRECISION_FULL)).toMatch(
      /^\d+\.\d+$/,
    );
  });
});
