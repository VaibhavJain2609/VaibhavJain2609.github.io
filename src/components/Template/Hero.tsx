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

          <p className="hero-tagline">
            I&apos;m an {profile.role} at{' '}
            <a href="https://www.nfsu.ac.in/" className="hero-highlight">
              {profile.employer}
            </a>
            . I break web applications, analyse malware, and build the systems I
            audit. Most recently a cybersecurity analyst intern at{' '}
            <a href="https://ekvayu.com" className="hero-highlight">
              Ekvayu Tech
            </a>
            , remediating 15+ critical vulnerabilities in a security product
            through VAPT.
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
