export interface Course {
  title: string;
  /**
   * Catalog code, where the institution publishes one. NFSU does not publish
   * per-paper codes for this programme, so those rows carry a title only and
   * `Course.tsx` renders them without the number prefix.
   */
  number?: string;
  link: string;
  university: string;
}

const NFSU_PROGRAMME =
  'https://www.nfsu.ac.in/Programs/programinfo/23?deptid=53';
const CSUS_CATALOG = 'https://catalog.csus.edu/';
const FOOTHILL_CATALOG = 'https://foothill.edu/schedule/';

const courses: Course[] = [
  {
    title: 'Web Application Security',
    link: NFSU_PROGRAMME,
    university: 'NFSU',
  },
  {
    title: 'Malware Analysis and Forensics',
    link: NFSU_PROGRAMME,
    university: 'NFSU',
  },
  {
    title: 'Network Security Forensics',
    link: NFSU_PROGRAMME,
    university: 'NFSU',
  },
  {
    title: 'Computer Networking Fundamentals',
    number: 'CSC 138',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Operating Systems Principles',
    number: 'CSC 139',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Database Management Systems',
    number: 'CSC 134',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Computer Software Engineering',
    number: 'CSC 131',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Introduction to Systems Programming in UNIX',
    number: 'CSC 60',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Computer Organization',
    number: 'CSC 137',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Data Mining',
    number: 'CSC 177',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Intelligent Systems',
    number: 'CSC 180',
    link: CSUS_CATALOG,
    university: 'Sacramento State',
  },
  {
    title: 'Advanced Data Structures and Algorithms in Java',
    number: 'CS 1C',
    link: FOOTHILL_CATALOG,
    university: 'Foothill College',
  },
  {
    title: 'Discrete Mathematics',
    number: 'MATH 22',
    link: FOOTHILL_CATALOG,
    university: 'Foothill College',
  },
];
export default courses;
