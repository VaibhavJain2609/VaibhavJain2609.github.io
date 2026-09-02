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
            Grafana across 100+ Docker Compose containers at three sites, and
            cloud and identity infrastructure on Azure and Entra ID. On the
            security side: penetration testing and VAPT against web applications
            — 15+ critical vulnerabilities remediated at{' '}
            <a href="https://ekvayu.com" className="hero-highlight">
              Ekvayu Tech
            </a>{' '}
            — firewall hardening and VLAN segmentation, and memory forensics and
            incident response on compromised systems. Currently an{' '}
            {profile.role} at{' '}
            <a href="https://www.nfsu.ac.in/" className="hero-highlight">
              {profile.employer}
            </a>
            .
          </p>

          {/* Availability is a pass/fail filter in a recruiter's first pass,
              and left to inference silence reads as "not looking" as readily
              as it reads as that being untrue. Deliberately the only status
              item: the row is not a place to accumulate facts about the
              person, and where they sit is not one being volunteered. */}
          <p className="hero-status">
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
