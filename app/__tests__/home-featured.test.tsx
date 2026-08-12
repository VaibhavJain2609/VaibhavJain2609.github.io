import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import Cell from '@/components/Projects/Cell';
import projects from '@/data/projects';
import { createHeadingId } from '@/lib/anchors';

/**
 * The homepage's "Recent projects" row used to point every card at
 * `/projects/`, so three differently-named links all dropped the reader at the
 * top of the index with no sign of which one they had clicked. They now deep
 * link to the card's own anchor.
 *
 * The two sides build that anchor independently — the homepage from the
 * project title, `Cell` from the same title as an `id` — so this renders the
 * cards and checks the links actually land, rather than trusting that both
 * happen to call the same helper today. `verify-export` catches this as well,
 * but only after a full production build.
 */
const featured = projects.filter((project) => project.featured).slice(0, 3);

function projectCardIds(): string[] {
  const html = renderToStaticMarkup(
    <>
      {projects.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </>,
  );

  return Array.from(html.matchAll(/id="([^"]+)"/g)).map((match) => match[1]);
}

describe('homepage featured projects', () => {
  const ids = projectCardIds();

  it('shows the three most recent featured projects', () => {
    // Pinned against the data rather than against titles, which would need
    // editing every time a project ships. `src/data/projects.ts` is sorted
    // newest first, so the row fills itself.
    const expected = [...projects]
      .filter((project) => project.featured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3)
      .map((project) => project.title);

    expect(featured.map((project) => project.title)).toEqual(expected);
  });

  it('links each featured project at an anchor the projects page renders', () => {
    expect(featured.length).toBeGreaterThan(0);

    for (const project of featured) {
      const href = `/projects/#${createHeadingId(project.title)}`;

      expect(ids).toContain(href.split('#')[1]);
    }
  });

  it('renders each project card anchor exactly once', () => {
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

    expect(duplicates).toEqual([]);
  });
});
