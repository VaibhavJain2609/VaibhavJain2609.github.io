import type { Metadata } from 'next';

import ContactIcons from '@/components/Contact/ContactIcons';
import EmailLink from '@/components/Contact/EmailLink';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: `Contact ${profile.name} via email at ${profile.email}.`,
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper hideFooter mainClassName="page-main--contact">
      <section className="contact-page">
        <header className="contact-header">
          <h1 className="page-title">Get in Touch</h1>
        </header>

        <div className="contact-content">
          <div className="contact-email-block">
            <EmailLink />
            <p className="contact-hint">Usually respond within 24 hours</p>
          </div>

          <div className="contact-divider">
            <span>or find me on</span>
          </div>

          <ContactIcons includeEmail={false} />

          {/* The three facts a recruiter has to establish before writing the
              email, answered before they ask. All of them already lived in
              `profile.json` and none of them were rendered anywhere: the
              timezone and the open-to line were dead data, and relocation
              was stated only in the hero, which a visitor who lands straight
              on /contact from a search result never sees. Left unstated, a
              location filter reads "Jaipur" — a city explicitly not being
              targeted — and answers a question nobody asked.

              The overlap clause is deliberately specific rather than the
              usual "flexible hours": a remote screen is deciding whether
              standups are possible, and a number they can check against
              their own calendar is the only version of that claim worth
              making. */}
          <dl className="contact-facts">
            <div className="contact-fact">
              <dt>Based in</dt>
              <dd>
                {profile.currentCity} — relocating to {profile.relocatingTo}
              </dd>
            </div>
            <div className="contact-fact">
              <dt>Hours</dt>
              <dd>
                {profile.timezone} — {profile.timezoneOverlap}
              </dd>
            </div>
            <div className="contact-fact">
              <dt>Open to</dt>
              <dd>{profile.openTo}</dd>
            </div>
          </dl>
        </div>
      </section>
    </PageWrapper>
  );
}
