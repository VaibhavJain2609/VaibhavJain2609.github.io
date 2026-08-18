import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import profile from '@/data/profile.json';
import routes from '@/data/routes';
import { AUTHOR_NAME } from '@/lib/utils';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  // Stated from the profile, not from `work[0]`. The most recent resume entry
  // is not necessarily current, and reading it as one billed a finished
  // contract as an ongoing job on every page of the site.
  const currentRole = `${profile.role} at ${profile.employer}`;

  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href="/" className="footer-avatar">
            <ThemePortrait width={80} height={80} />
          </Link>
          <div className="footer-info">
            <span className="footer-name">{AUTHOR_NAME}</span>
            <p className="footer-role">{currentRole}</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} ·{' '}
              {/* This must be the repository this site is actually built and
                  deployed from — `vaibhavjain2609.github.io`, the `site`
                  remote. It pointed at `vaibhavjain2609/personal-site` for a
                  long time, which is an untouched fork of the upstream
                  template: its README still welcomes you to the original
                  author's site, offers his support address, and describes a
                  create-react-app and SCSS stack that `/projects` contradicts
                  in the same breath. A "Source" link is an invitation to
                  verify; sending it somewhere that disproves the page is worse
                  than not offering one. */}
              <a
                href="https://github.com/VaibhavJain2609/vaibhavjain2609.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          {/* Driven from the same route registry as the header, which had
              drifted: the footer was missing Writing and Stats entirely.
              These are group labels, not document sections, so they are
              spans rather than headings. */}
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <span id="footer-links-heading" className="footer-links-label">
              Explore
            </span>
            <div className="footer-links-grid">
              {routes
                .filter((route) => !route.index)
                .map((route) => (
                  <Link key={route.path} href={route.path}>
                    {route.label}
                  </Link>
                ))}
            </div>
          </nav>

          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <span id="footer-social-heading" className="footer-social-label">
              Connect
            </span>
            <ContactIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
