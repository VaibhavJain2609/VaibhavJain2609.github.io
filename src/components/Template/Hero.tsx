import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          {/* Leads with the hybrid, because that is the thing that is hard to
              hire for: someone who builds the delivery pipeline and also
              secures it. The two halves are stated as two halves — build side
              first — so a DevOps screen and an AppSec screen each find their
              vocabulary in the first two sentences rather than one of them
              having to read to the end. Enrolment status stays last; opening
              with "M.Sc. candidate" made a security engineer with five roles
              behind him scan as a student. */}
          <p className="hero-tagline">
            {profile.headline} — I build the delivery pipeline and secure it. On
            the build side: a seven-stage GitLab CI pipeline where secret, SAST,
            container, and image scanning gate every deploy, Prometheus and
            Grafana across 100+ containers at three sites, and cloud and
            identity infrastructure on Azure and Entra ID. On the security side:
            penetration testing and VAPT against web applications — 15+ critical
            vulnerabilities remediated at{' '}
            <a href="https://ekvayu.com" className="hero-highlight">
              Ekvayu Tech
            </a>{' '}
            — OPNsense firewalls and VLAN segmentation, and memory forensics and
            incident response on compromised systems. Currently an{' '}
            {profile.role} at{' '}
            <a href="https://www.nfsu.ac.in/" className="hero-highlight">
              {profile.employer}
            </a>
            .
          </p>

          {/* Location and availability are pass/fail filters in a recruiter's
              first pass. Left to inference, silence reads as "not looking" or
              "not eligible" as readily as it reads as either being untrue.

              Relocation is here for the same reason, and it is the one that
              actually decides things: the roles being targeted are in cities
              this one is not, so a location filter reads "Jaipur" and stops.
              Stating the destination is what keeps the filter from answering
              a question that was never asked. */}
          <p className="hero-status">
            <span className="hero-status-item">{profile.currentCity}</span>
            <span className="hero-status-item">
              Relocating to {profile.relocatingTo}
            </span>
            <span className="hero-status-item hero-status-item--live">
              {profile.availability}
            </span>
          </p>

          <div className="hero-cta">
            <Link href="/projects" className="button">
              View Projects
            </Link>
            <Link href="/resume" className="hero-resume-link">
              Read Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
