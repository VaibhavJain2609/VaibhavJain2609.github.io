import type { Metadata } from 'next';
import Script from 'next/script';

import { SiteSchema } from '@/components/Schema';
import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import { MAIN_CONTENT_ID } from '@/components/Template/PageWrapper';
import ScrollToTop from '@/components/Template/ScrollToTop';
import { sharedOpenGraph, sharedTwitter } from '@/lib/metadata';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';
import { bricolage, jetbrainsMono, newsreader } from './fonts';
import './tailwind.css';

export const metadata: Metadata = {
  title: {
    default: AUTHOR_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: SITE_DESCRIPTION,
  // Two kinds of term live here. Most are claimed by a role, a project, or a
  // listed skill elsewhere on the site. The infrastructure-as-code and
  // orchestration terms — Terraform, Kubernetes — are target-role vocabulary
  // rather than experience, and are deliberately confined to this array: no
  // major engine ranks on `meta keywords`, so they cost nothing here, whereas
  // the description, the hero, and `src/data/resume/skills.ts` are read by
  // people and must stay true. Do not promote a term out of this list into
  // those without work to back it.
  keywords: [
    AUTHOR_NAME,
    'DevSecOps',
    'DevOps engineer',
    'application security',
    'CI/CD',
    'CI/CD pipelines',
    'GitHub Actions',
    'Docker',
    'containers',
    'Kubernetes',
    'Terraform',
    'infrastructure as code',
    'cloud security',
    'Azure',
    'Entra ID',
    'Active Directory',
    'Linux',
    'network security',
    'firewall configuration',
    'penetration testing',
    'VAPT',
    'digital forensics',
    'incident response',
    'malware analysis',
    'security engineer',
    'NFSU',
  ],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  metadataBase: new URL(SITE_URL),
  // The root is the origin of the share metadata, so it uses the same shared
  // blocks as every other page. Hand-writing them here is what left the
  // homepage advertising a different og:image:alt from the rest of the site
  // for the identical image.
  openGraph: {
    ...sharedOpenGraph,
    type: 'website',
    url: `${SITE_URL}/`,
    title: AUTHOR_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    ...sharedTwitter,
    title: AUTHOR_NAME,
    description: SITE_DESCRIPTION,
  },
  // Only the snippet/preview hints are declared globally. `index, follow` is
  // already the default, and emitting it here meant every page that sets
  // `noindex` — the 404, the legacy post route — shipped with contradictory
  // robots tags that a crawler is free to resolve either way.
  robots: {
    googleBot: {
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* CSP-safe theme initialization - prevents flash on load */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=window.localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}else{document.documentElement.setAttribute('data-theme','light')}}catch(e){}})();`}
        </Script>
        <SiteSchema />
      </head>
      <body>
        {/* First focusable element on the page. The About and Resume pages
            are thousands of pixels long, so tabbing past the nav to reach
            content is otherwise the only route in. */}
        <a href={`#${MAIN_CONTENT_ID}`} className="skip-link">
          Skip to content
        </a>
        <ScrollToTop />
        <div className="site-wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
