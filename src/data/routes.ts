import { AUTHOR_NAME } from '@/lib/utils';

export interface Route {
  label: string;
  path: string;
  index?: boolean;
  primary?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: AUTHOR_NAME,
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    // Promoted to primary navigation: the project write-ups are what a reader
    // is here to evaluate, and they were previously buried as "Archive".
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Stats',
    path: '/stats',
    primary: false,
  },
];

export default routes;
