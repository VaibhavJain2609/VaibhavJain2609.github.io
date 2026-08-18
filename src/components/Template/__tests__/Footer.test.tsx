import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import pkg from '../../../../package.json';
import Footer from '../Footer';

/**
 * The footer's "Source" link is an invitation to verify the site, so it has to
 * land on the repository this site is actually built from. It spent a long
 * time pointing at `vaibhavjain2609/personal-site`, an untouched fork of the
 * upstream template whose README still described a create-react-app and SCSS
 * project — the opposite of what `/projects` claims about this codebase.
 *
 * Pinning it against `package.json`'s `repository.url` means the two cannot
 * drift apart silently: whichever one is edited, the other has to follow.
 */
describe('footer source link', () => {
  it('points at the repository declared in package.json', () => {
    render(<Footer />);

    const source = screen.getByRole('link', { name: /^Source/ });
    const repository = pkg.repository.url.replace(/\.git$/, '');

    expect(source).toHaveAttribute('href', repository);
  });

  it('does not link the upstream template fork', () => {
    render(<Footer />);

    const source = screen.getByRole('link', { name: /^Source/ });

    expect(source.getAttribute('href')).not.toMatch(/\/personal-site\/?$/);
  });
});
