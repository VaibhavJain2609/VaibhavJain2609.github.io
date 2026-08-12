import { StatData } from '../../components/Stats/types';

/**
 * Figures about this site.
 *
 * Everything here has to be measurable from this repository. The list used to
 * carry GitHub repo statistics — stars, forks, watchers, open issues — read
 * from the upstream template's repository, which describes someone else's
 * project. Rows with a `key` are resolved at build time by `Stats/Site.tsx`.
 */
const data: StatData[] = [
  {
    // Counted from the working tree at build time by `Site.tsx`; see
    // `src/lib/loc.ts`. Do not hardcode a number here — the previous one
    // drifted by nearly 2,000 lines before anyone noticed.
    label: 'Lines of TypeScript powering this website',
    key: 'source_lines',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
];

export default data;
