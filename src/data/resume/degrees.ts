export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
  /** Set on a degree still in progress, so the year reads as a target. */
  expected?: boolean;
}

const degrees: Degree[] = [
  {
    school: 'National Forensic Sciences University',
    degree: 'M.Sc. Digital Forensics and Information Security',
    link: 'https://www.nfsu.ac.in/',
    year: 2027,
    expected: true,
  },
  {
    school: 'California State University, Sacramento',
    degree: 'B.S. Computer Science',
    link: 'https://www.csus.edu/',
    year: 2024,
  },
  {
    school: 'Foothill College',
    degree: 'A.D.T. Computer Science',
    link: 'https://foothill.edu/',
    year: 2021,
  },
];

export default degrees;
