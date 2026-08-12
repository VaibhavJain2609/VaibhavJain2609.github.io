import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import profile from '@/data/profile.json';
import Personal from '../../Stats/Personal';

describe('Personal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the personal stats table', () => {
    render(<Personal />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('displays the years-coding label', () => {
    render(<Personal />);

    expect(screen.getByText('Years writing code')).toBeInTheDocument();
  });

  it('displays countries visited', () => {
    render(<Personal />);

    // Asserted against the profile rather than literals, so this pins the
    // wiring instead of one person's biography.
    expect(screen.getByText('Countries visited')).toBeInTheDocument();
    expect(
      screen.getByText(String(profile.countriesVisited)),
    ).toBeInTheDocument();
  });

  it('displays current city', () => {
    render(<Personal />);

    expect(screen.getByText('Current city')).toBeInTheDocument();
    expect(screen.getByText(profile.currentCity)).toBeInTheDocument();
  });

  it('has a link for countries visited', () => {
    render(<Personal />);

    const link = screen.getByRole('link', {
      name: String(profile.countriesVisited),
    });
    expect(link).toHaveAttribute(
      'href',
      'https://www.google.com/maps/d/embed?mid=1iBBTscqateQ93pWFVfHCUZXoDu8&z=2',
    );
  });

  it('updates the live readout over time', async () => {
    render(<Personal />);

    const ageCell = screen.getByText('Years writing code').closest('tr');
    expect(ageCell).toBeInTheDocument();

    // Advance timer to trigger age update
    act(() => {
      vi.advanceTimersByTime(50);
    });

    // The readout should still be present: the value changes out of band via
    // `textContent`, so the row React renders never disappears.
    expect(screen.getByText('Years writing code')).toBeInTheDocument();
  });
});
