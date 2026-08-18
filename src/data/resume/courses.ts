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
  /**
   * Optional. What the paper is actually used for, in the vocabulary of the
   * work rather than the syllabus. A course title on its own is a claim about
   * attendance; the consequence clause is what turns it into a claim about
   * capability, and it is the only thing on this list that survives a reader
   * who does not know the programme. Rows without one render as before.
   */
  consequence?: string;
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
    consequence:
      'OWASP ASVS-aligned; the source of the DAST stage and the ZAP smoke tests at the end of the delivery pipeline.',
  },
  {
    title: 'Malware Analysis and Forensics',
    link: NFSU_PROGRAMME,
    university: 'NFSU',
    consequence:
      'Static and behavioural analysis of untrusted binaries — the same triage reasoning behind Trivy and Semgrep severity gates, and behind deciding which findings actually block a deploy.',
  },
  {
    title: 'Network Security Forensics',
    link: NFSU_PROGRAMME,
    university: 'NFSU',
    consequence:
      'Packet-level east-west traffic analysis, used to verify that VLAN segmentation holds in practice rather than on the diagram.',
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
