import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Resume',
  description: `${AUTHOR_NAME}'s resume — DevSecOps and delivery pipelines, CI/CD, application security, and digital forensics. NFSU, Ekvayu Tech, Sacramento State.`,
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <h1 className="resume-title">Resume</h1>
          {/* This paragraph is the first thing read on the page a technical
              screen opens to check the hero, so it has to answer in the hero's
              order: build side first, security side second. It used to open
              "Security engineer working across application security and
              digital forensics" and never name the pipeline at all — which
              made the hero and the resume two different candidates, and left
              the most role-relevant work invisible to anyone who read only
              the summary. */}
          <p className="resume-summary">
            DevSecOps and application security engineer, currently reading for
            an M.Sc. in Digital Forensics and Information Security at NFSU. I
            have built a seven-stage GitLab CI pipeline where security scanning
            gates the deploy rather than following it, run Prometheus and
            Grafana over a container fleet across three sites, and built
            identity and remote-access infrastructure for a firm handling
            confidential client records. I came to it from the other side: VAPT
            against the same commercial security product a year earlier, and the
            full-stack systems I now audit before that.
          </p>
          {/* A recruiter's first action is to forward a PDF to a hiring
              manager. Without this they have to print the page themselves. */}
          <a
            className="resume-download"
            href="/vaibhav-jain-resume.pdf"
            download
          >
            Download PDF
            <span aria-hidden="true"> ↓</span>
          </a>
          {/* Print-only, but real markup rather than CSS `content`, so it is
              selectable, linkable, and reads from the shared profile. The
              screen layout carries these in the footer, which print hides. */}
          <address className="resume-print-contact">
            <a href={`${SITE_URL}/`}>{SITE_URL.replace(/^https?:\/\//, '')}</a>
            <span aria-hidden="true"> · </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span aria-hidden="true"> · </span>
            <a href="https://github.com/vaibhavjain2609">
              github.com/vaibhavjain2609
            </a>
          </address>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>

          <section id="references" className="resume-section">
            <References />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
