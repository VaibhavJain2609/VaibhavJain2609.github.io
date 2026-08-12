import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import profile from '@/data/profile.json';
import { AUTHOR_NAME } from '@/lib/utils';
import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    // Asserted against the profile rather than a literal, so this pins the
    // wiring instead of one person's name.
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(AUTHOR_NAME);
  });

  it('states the current position and links the named organisations', () => {
    const { container } = render(<Hero />);

    const tagline = container.querySelector('.hero-tagline');
    expect(tagline).toHaveTextContent(profile.role);
    expect(tagline).toHaveTextContent(profile.employer);

    const universityLink = screen.getByRole('link', {
      name: profile.employer,
    });
    expect(universityLink).toHaveAttribute('href', 'https://www.nfsu.ac.in/');
    expect(universityLink).toHaveClass('hero-highlight');

    const employerLink = screen.getByRole('link', { name: 'Ekvayu Tech' });
    expect(employerLink).toHaveAttribute('href', 'https://ekvayu.com');
    expect(employerLink).toHaveClass('hero-highlight');
  });

  it('keeps personal stats and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.telemetry')).not.toBeInTheDocument();
    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const projectsButton = screen.getByRole('link', { name: /view projects/i });
    expect(projectsButton).toHaveAttribute('href', '/projects');
    expect(projectsButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /read resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
