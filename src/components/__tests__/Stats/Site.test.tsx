import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Site from '../../Stats/Site';

/**
 * `SiteStats` reports only figures measured from this repository. It used to
 * fetch stars, forks, watchers, and open issues from the GitHub API for the
 * upstream template's repository — someone else's numbers, rendered under the
 * heading "This site" — so there is no fetch to mock here any more.
 */
describe('Site', () => {
  it('renders the site stats table', () => {
    render(Site());

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays the measured and static stats', () => {
    render(Site());

    expect(
      screen.getByText('Lines of TypeScript powering this website'),
    ).toBeInTheDocument();
    expect(screen.getByText('Number of linter warnings')).toBeInTheDocument();
    expect(screen.getByText('Number of spoons')).toBeInTheDocument();
  });

  it('resolves the line count rather than rendering an empty cell', () => {
    render(Site());

    const row = screen
      .getByText('Lines of TypeScript powering this website')
      .closest('tr');

    // Counted from the working tree at build time by `countSourceLines()`.
    // A blank here would mean the key never resolved.
    expect(row?.textContent).toMatch(/\d/);
  });

  it('reports no figures sourced from another project', () => {
    render(Site());

    expect(screen.queryByText(/stars this repository/i)).toBeNull();
    expect(screen.queryByText(/number of forks/i)).toBeNull();
    expect(screen.queryByText(/last updated at/i)).toBeNull();
  });
});
