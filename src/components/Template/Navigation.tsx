'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import routes from '@/data/routes';
import { isActiveRoute } from '@/lib/routes';
import { AUTHOR_NAME } from '@/lib/utils';

import Hamburger from './Hamburger';
import ThemeToggle from './ThemeToggle';

/**
 * Initials for the wordmark. Derived from the name rather than typed, so the
 * mark cannot drift from whoever the site is about.
 */
const INITIALS = AUTHOR_NAME.split(/\s+/)
  .map((part) => part[0])
  .join('')
  .toUpperCase();

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label={`${AUTHOR_NAME} — home`}>
        <span className="logo-text">{INITIALS}</span>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {routes
          .filter((l) => !l.index && l.primary !== false)
          .map((l) => {
            const active = isActiveRoute(pathname, l.path);

            return (
              <Link
                key={l.label}
                href={l.path}
                className={`nav-link ${active ? 'active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {l.label}
              </Link>
            );
          })}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}
