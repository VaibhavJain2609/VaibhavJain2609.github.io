import YearsCoding from '@/components/Stats/YearsCoding';
import { COUNTRIES_VISITED, CURRENT_CITY } from '@/lib/telemetry';

import type { StatData } from '../../components/Stats/types';

/**
 * Figures about the person, resolved at render time.
 *
 * This is a function rather than a module-level array because the live
 * readout needs its build-time starting value handed to it — see
 * `Stats/Personal.tsx`, which measures it once on the server. The same shape
 * as `stats/site.ts`, which resolves its source-line count the same way.
 */
export default function personalStats(initialAge: string): StatData[] {
  return [
    {
      key: 'years-coding',
      label: 'Years writing code',
      value: <YearsCoding initial={initialAge} />,
    },
    {
      key: 'countries',
      label: 'Countries visited',
      value: COUNTRIES_VISITED,
      link: 'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
    },
    {
      key: 'location',
      label: 'Current city',
      value: CURRENT_CITY,
    },
  ];
}
