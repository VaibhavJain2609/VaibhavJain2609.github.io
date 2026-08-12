import type { Metadata } from 'next';
import Link from 'next/link';

import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import projects from '@/data/projects';
import { createHeadingId } from '@/lib/anchors';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  // The homepage builds its openGraph in the root layout, so it only needs
  // the canonical here. `trailingSlash: true` makes `/` the canonical form.
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  // The homepage leads with work rather than a list of links elsewhere. Which
  // projects surface is decided in `src/data/projects.ts`, so this stays
  // data-driven and new entries place themselves. That array is sorted newest
  // first, so taking three fills the row with the genuinely most recent work
  // rather than whichever three were typed in first.
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <section className="home-featured" aria-labelledby="home-featured-title">
        <div className="home-featured-header">
          <div>
            <span className="home-section-kicker">Selected work</span>
            <h2 id="home-featured-title">Recent projects</h2>
          </div>
          <Link href="/projects/" className="home-featured-all">
            View all
          </Link>
        </div>
        <div className="home-featured-list">
          {featured.map((project) => (
            <Link
              key={project.title}
              // Deep link to the card itself. Three differently-named links
              // that all landed on `/projects/` left the reader to find the
              // one they had just clicked.
              href={`/projects/#${createHeadingId(project.title)}`}
              className="home-featured-item"
            >
              <span className="home-featured-meta">
                {project.date.slice(0, 4)}
                {project.tech?.length ? ` · ${project.tech[0]}` : ''}
              </span>
              <h3>{project.title}</h3>
              <p>{project.subtitle ?? project.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
