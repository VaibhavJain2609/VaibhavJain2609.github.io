import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('Digital Forensics and Information');
    expect(aboutMarkdown).toContain('Ekvayu Tech');
  });

  it('contains the history section', () => {
    expect(aboutMarkdown).toContain('# Some History');
    expect(aboutMarkdown).toContain('Woodstock School');
  });

  it('contains the likes section', () => {
    expect(aboutMarkdown).toContain('# I Like');
    expect(aboutMarkdown).toContain('Basketball');
  });

  it('contains the travel section', () => {
    expect(aboutMarkdown).toContain('# Travel / Geography');
    expect(aboutMarkdown).toContain('Ghaziabad, India');
  });

  it('contains the fun facts section', () => {
    expect(aboutMarkdown).toContain('# Fun Facts');
  });

  it('contains the dreams section', () => {
    expect(aboutMarkdown).toContain('# I Dream Of');
    expect(aboutMarkdown).toContain('Staying curious');
  });

  it('contains valid markdown links', () => {
    // Check for markdown link format [text](url)
    const linkRegex = /\[.+?\]\(.+?\)/g;
    const links = aboutMarkdown.match(linkRegex);

    // A floor, not a target. The old threshold of 10 was calibrated to a
    // closing list of seventeen admired personal websites; padding the page
    // with links to satisfy a number would be the wrong fix.
    expect(links).not.toBeNull();
    expect(links!.length).toBeGreaterThanOrEqual(3);
  });

  it('contains properly formatted headers', () => {
    // Check for markdown headers
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).not.toBeNull();
    expect(headers!.length).toBeGreaterThan(5);
  });
});
