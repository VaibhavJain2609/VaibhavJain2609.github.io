import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('uses trailing slashes for exported page routes', () => {
    const entries = sitemap();

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${SITE_URL}/` }),
        expect.objectContaining({ url: `${SITE_URL}/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/projects/` }),
        expect.objectContaining({ url: `${SITE_URL}/stats/` }),
        expect.objectContaining({ url: `${SITE_URL}/contact/` }),
      ]),
    );
  });

  it('lists every route with a trailing slash', () => {
    expect(sitemap().every((entry) => entry.url.endsWith('/'))).toBe(true);
  });

  it('does not invent modification dates', () => {
    // Every exported page is static. A `lastModified` here would be a
    // fabricated freshness signal rather than a measured one.
    expect(sitemap().every((entry) => entry.lastModified === undefined)).toBe(
      true,
    );
  });
});
