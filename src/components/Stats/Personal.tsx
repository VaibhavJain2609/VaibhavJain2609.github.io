import personalStats from '../../data/stats/personal';
import { AGE_PRECISION_FULL, ageAt } from '../../lib/telemetry';
import Table from './Table';

/**
 * Personal statistics.
 *
 * A server component, so the exported HTML carries a real reading of the live
 * figure instead of a row of dashes. The live tick that replaces it is the
 * only part that needs the browser, and it lives in `YearsCoding`.
 */
export default function PersonalStats() {
  // Measured once, when the page is built. Every visitor's browser then takes
  // over from here; a reader without JavaScript keeps this one, which is
  // accurate to about four decimal places for a month after a deploy and
  // honest at every one of them — it is the same measurement, at a stated
  // instant, rather than a guess.
  const initialAge = ageAt(Date.now(), AGE_PRECISION_FULL);

  return <Table data={personalStats(initialAge)} />;
}
