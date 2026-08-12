import initialData from '../../data/stats/site';
import { countSourceLines } from '../../lib/loc';
import Table from './Table';

/**
 * Site statistics.
 *
 * This deliberately reports only figures measured from this repository at
 * build time. It previously fetched stars, forks, watchers, and open issues
 * from the GitHub API for the upstream template's repository — numbers
 * describing someone else's project, rendered under the heading "This site" —
 * with a hardcoded fallback that shipped as fact whenever the API was
 * unreachable.
 *
 * Server component, no client-side JavaScript shipped.
 */
export default function SiteStats() {
  // Measured from the working tree rather than typed in, so the figure cannot
  // drift away from the code it describes. See `src/lib/loc.ts`.
  const sourceLines = countSourceLines();

  // Resolve values and drop the format functions — those cannot cross the RSC
  // boundary.
  const data = initialData.map((field) => {
    const rawValue = field.key === 'source_lines' ? sourceLines : field.value;
    const value = field.format ? field.format(rawValue) : rawValue;

    return {
      label: field.label,
      value,
      link: field.link,
    };
  });

  return <Table data={data} />;
}
