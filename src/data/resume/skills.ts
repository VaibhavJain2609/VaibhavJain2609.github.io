export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Offensive security
  {
    title: 'Web Application Pentesting',
    competency: 4,
    category: ['Security'],
  },
  {
    title: 'Burp Suite',
    competency: 4,
    category: ['Security'],
  },
  {
    title: 'OWASP ZAP',
    competency: 4,
    category: ['Security'],
  },
  {
    title: 'Nessus',
    competency: 4,
    category: ['Security'],
  },
  {
    title: 'Nmap',
    competency: 4,
    category: ['Networking', 'Security'],
  },
  {
    title: 'Threat & Vulnerability Assessment',
    competency: 4,
    category: ['Security'],
  },
  // Digital forensics and incident response
  {
    title: 'Memory Forensics',
    competency: 3,
    category: ['Forensics'],
  },
  {
    title: 'Volatility 3',
    competency: 3,
    category: ['Forensics'],
  },
  {
    title: 'Static Malware Analysis',
    competency: 3,
    category: ['Forensics'],
  },
  {
    title: 'Autopsy',
    competency: 3,
    category: ['Forensics'],
  },
  {
    title: 'Wireshark',
    competency: 4,
    category: ['Forensics', 'Networking'],
  },
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Infrastructure', 'Languages'],
  },
  {
    title: 'PowerShell',
    competency: 3,
    category: ['Infrastructure', 'Languages'],
  },
  {
    title: 'C/C++',
    competency: 3,
    category: ['Languages'],
  },
  // Web development
  {
    title: 'Next.js',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Spring Boot',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Web Development'],
  },
  // Identity and access
  {
    title: 'Active Directory',
    competency: 4,
    category: ['Identity', 'Infrastructure'],
  },
  {
    title: 'Entra ID',
    competency: 3,
    category: ['Identity', 'Infrastructure'],
  },
  {
    title: 'Keycloak',
    competency: 3,
    category: ['Identity', 'Web Development'],
  },
  {
    title: 'Auth0',
    competency: 3,
    category: ['Identity', 'Web Development'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases'],
  },
  // Infrastructure
  {
    title: 'Linux',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Infrastructure'],
  },
  {
    title: 'Sophos XGS Firewall',
    competency: 3,
    category: ['Infrastructure', 'Networking'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Infrastructure'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

/**
 * Build categories from skills, all using the accent color token.
 */
function buildCategories(skillsList: Skill[]): Category[] {
  const uniqueCategories = Array.from(
    new Set(skillsList.flatMap(({ category }) => category)),
  ).sort();

  return uniqueCategories.map((category) => ({
    name: category,
    color: 'var(--color-accent)',
  }));
}

const categories: Category[] = buildCategories(skills);

export { categories, skills };
