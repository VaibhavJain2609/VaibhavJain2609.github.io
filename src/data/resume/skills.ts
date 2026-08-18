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
    // Spelled out: "penetration testing" is the phrase screened for, while
    // "VAPT" is largely India-market shorthand.
    title: 'Web Application Penetration Testing',
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
    // Shells are listed as languages *and* as DevOps tooling: they are how the
    // pipeline and the Windows estate are actually driven, not a general-
    // purpose language choice.
    title: 'Bash',
    competency: 4,
    category: ['DevOps / DevSecOps', 'Languages'],
  },
  {
    title: 'PowerShell',
    competency: 3,
    category: ['DevOps / DevSecOps', 'Languages'],
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
    // Carries the old name too: most job descriptions still say "Azure AD".
    title: 'Entra ID (Azure AD)',
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
  // Infrastructure — the estate that gets run, as distinct from the tooling
  // that builds and ships onto it, which is DevOps / DevSecOps below.
  {
    title: 'Linux',
    competency: 4,
    category: ['Infrastructure'],
  },
  {
    title: 'Sophos XGS Firewall',
    competency: 3,
    category: ['Infrastructure', 'Networking'],
  },
  // DevOps / DevSecOps. Mostly from the 2026 Ekvayu stint — deployment
  // pipelines across environments — plus the container, cloud, and
  // version-control tooling that used to sit under Infrastructure. Filtering
  // to this category is the first thing a DevOps screen does on this page, and
  // it previously returned two entries while Docker, Azure, and Git sat one
  // category over.
  {
    title: 'CI/CD Pipelines',
    competency: 3,
    category: ['DevOps / DevSecOps'],
  },
  {
    title: 'GitHub Actions',
    competency: 3,
    category: ['DevOps / DevSecOps'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['DevOps / DevSecOps'],
  },
  {
    // No separate "Cloud" category: it would hold this and Entra ID and read
    // as a two-item stub next to categories with a dozen entries.
    title: 'Azure',
    competency: 3,
    category: ['DevOps / DevSecOps'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['DevOps / DevSecOps'],
  },
  {
    title: 'OPNsense',
    competency: 3,
    category: ['Networking', 'Security'],
  },
  {
    title: 'VLAN Segmentation',
    competency: 3,
    category: ['Networking'],
  },
  {
    title: 'Firewall Configuration',
    competency: 4,
    category: ['Networking', 'Security'],
  },
  {
    title: 'Network Security',
    competency: 3,
    category: ['Networking', 'Security'],
  },
  // Named for what the work already evidences: the Hoonar auth API was taken to
  // OWASP ASVS Level 2, KK Society was an RBAC and broken-access-control audit,
  // and the IR project was memory forensics with IOC extraction.
  {
    title: 'REST API Design',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'OWASP ASVS',
    competency: 3,
    category: ['Security'],
  },
  {
    title: 'OWASP Top 10',
    competency: 4,
    category: ['Security'],
  },
  {
    title: 'Role-Based Access Control',
    competency: 4,
    category: ['Identity', 'Security'],
  },
  {
    title: 'Incident Response',
    competency: 3,
    category: ['Forensics', 'Security'],
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
