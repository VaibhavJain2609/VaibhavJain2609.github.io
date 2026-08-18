import type { Metadata } from 'next';

import Cell from '@/components/Projects/Cell';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import data from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const PROJECTS_URL = `${SITE_URL}/projects/`;

// This page is the one a technical reviewer opens to check whether the hero
// is true, so it has to answer in the hero's own vocabulary. It used to lead
// with "application security, digital forensics, and full-stack systems" —
// which reads as a competing identity rather than a supporting one, and left
// the pipeline work, the thing being sold, unnamed on the page meant to
// evidence it.
const PROJECTS_DESCRIPTION = `Delivery pipelines, security engineering, and systems work by ${AUTHOR_NAME} — CI/CD and DevSecOps, application security, digital forensics, and the full-stack systems underneath.`;

export const metadata: Metadata = createPageMetadata({
  title: 'Projects',
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  const featuredProjects = data.filter((p) => p.featured);
  const otherProjects = data.filter((p) => !p.featured);

  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PROJECTS_URL,
            name: 'Projects',
            description: PROJECTS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PROJECTS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Projects', url: PROJECTS_URL },
          ]),
        ]}
      />
      <section className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">
            Pipelines and systems I have built, and systems I have broken —
            CI/CD and DevSecOps, application security, digital forensics, and
            the full-stack work underneath all of it
          </p>
        </header>

        {featuredProjects.length > 0 && (
          <section className="projects-featured">
            <h2 className="projects-section-title">Selected work</h2>
            <div className="projects-grid projects-grid--featured">
              {featuredProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}

        {otherProjects.length > 0 && (
          <section className="projects-other">
            <h2 className="projects-section-title">Earlier work</h2>
            <div className="projects-grid">
              {otherProjects.map((project) => (
                <Cell data={project} key={project.title} />
              ))}
            </div>
          </section>
        )}
      </section>
    </PageWrapper>
  );
}
