import { describe, expect, it } from 'vitest';

import { createHeadingId } from '@/lib/anchors';
import projects from '../projects';

describe('projects data', () => {
  it('exports an array of projects', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each project has required properties', () => {
    for (const project of projects) {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('date');
      expect(project).toHaveProperty('desc');

      expect(typeof project.title).toBe('string');
      expect(typeof project.date).toBe('string');
      expect(typeof project.desc).toBe('string');
    }
  });

  it('project titles are non-empty', () => {
    for (const project of projects) {
      expect(project.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('project descriptions are non-empty', () => {
    for (const project of projects) {
      expect(project.desc.trim().length).toBeGreaterThan(0);
    }
  });

  // `image` is optional: a project with no public screenshot renders a drawn
  // cover instead. Where a path is given it still has to be site-absolute.
  it('image paths, where present, start with /', () => {
    for (const project of projects) {
      if (project.image === undefined) continue;

      expect(project.image.startsWith('/')).toBe(true);
    }
  });

  it('dates are valid date strings', () => {
    for (const project of projects) {
      const date = new Date(project.date);
      expect(date.toString()).not.toBe('Invalid Date');
    }
  });

  it('links are valid URLs when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const project of projects) {
      if (project.link) {
        expect(project.link).toMatch(urlRegex);
      }
    }
  });

  it('tech is an array when present', () => {
    for (const project of projects) {
      if (project.tech) {
        expect(Array.isArray(project.tech)).toBe(true);
        expect(project.tech.length).toBeGreaterThan(0);
      }
    }
  });

  it('has unique project titles', () => {
    const titles = projects.map((p) => p.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('featured is boolean when present', () => {
    for (const project of projects) {
      if (project.featured !== undefined) {
        expect(typeof project.featured).toBe('boolean');
      }
    }
  });

  it('has at least one featured project', () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(1);
  });

  // Both surfaces render this array in order and print a year on every card,
  // so the order is a claim. Hand order had 2024-02 above 2024-05 under
  // "Earlier work" and put the homepage's "Recent projects" out of sequence.
  it('is sorted newest first', () => {
    const times = projects.map((p) => new Date(p.date).getTime());
    const sorted = [...times].sort((a, b) => b - a);

    expect(times).toEqual(sorted);
  });

  // The homepage links to `/projects/#<slug>` and `Cell` renders that slug as
  // the card's id. Two titles that slugify the same would make the deep link
  // ambiguous and put duplicate ids on the page, which verify-export rejects.
  it('gives every project a distinct anchor slug', () => {
    const slugs = projects.map((p) => createHeadingId(p.title));

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => slug !== 'section')).toBe(true);
  });
});
