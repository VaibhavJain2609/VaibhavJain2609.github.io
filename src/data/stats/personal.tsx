'use client';

import useLiveAge from '@/hooks/useLiveAge';
import {
  AGE_PRECISION_FULL,
  agePlaceholder,
  COUNTRIES_VISITED,
  CURRENT_CITY,
} from '@/lib/telemetry';

import type { StatData } from '../../components/Stats/types';

/**
 * The stats page reports time since the first line of code at deliberately
 * absurd precision.
 *
 * The placeholder is the rendered content; `useLiveAge` writes the reading into
 * this node directly, so the ticking never re-renders React.
 */
function YearsCoding() {
  const ref = useLiveAge<HTMLSpanElement>(AGE_PRECISION_FULL);

  return (
    <span className="stat-live" ref={ref}>
      {agePlaceholder(AGE_PRECISION_FULL)}
    </span>
  );
}

const data: StatData[] = [
  {
    key: 'years-coding',
    label: 'Years writing code',
    value: <YearsCoding />,
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

export default data;
