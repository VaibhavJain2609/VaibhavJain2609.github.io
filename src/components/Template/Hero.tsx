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

          {/* Leads with the professional identity, not the enrolment status.
              A recruiter reads the nouns in the first clause, and opening with
              "M.Sc. candidate" made a security engineer with five roles behind
              him scan as a student. `role` and `employer` still state the true
              current position in the footer and in schema.org. */}
          <p className="hero-tagline">
            {profile.headline} working across application security, digital
            forensics, and the infrastructure under both. I run penetration
            testing and VAPT against web applications — 15+ critical
            vulnerabilities remediated at{' '}
            <a href="https://ekvayu.com" className="hero-highlight">
              Ekvayu Tech
            </a>{' '}
            — do memory forensics and incident response on compromised systems,
            and build the platform underneath: CI/CD pipelines, OPNsense
            firewalls and VLAN segmentation, and an 80-user Active Directory and
            hardened SSL VPN estate from scratch. Currently an {profile.role} at{' '}
            <a href="https://www.nfsu.ac.in/" className="hero-highlight">
              {profile.employer}
            </a>
            .
          </p>

          {/* Location and availability are pass/fail filters in a recruiter's
              first pass. Left to inference, silence reads as "not looking" or
              "not eligible" as readily as it reads as either being untrue. */}
          <p className="hero-status">
            <span className="hero-status-item">{profile.currentCity}</span>
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
