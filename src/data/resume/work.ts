/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Praveen Aggarwal Chartered Accountants',
    position: 'IT Contractor',
    url: 'https://www.icai.org',
    startDate: '2025-12-01',
    endDate: '2026-01-31',
    summary: `A chartered accountancy firm in New Delhi holding client financial records under
    statutory retention and confidentiality obligations. Engaged to build their identity, remote
    access, and backup infrastructure from nothing.`,
    highlights: [
      'Architected an 80-user Active Directory environment from scratch and deployed a hybrid Active Directory and Entra ID integrated SSL VPN on a Sophos XGS firewall, with MFA and conditional access policies.',
      'Minimized data loss risk in disaster scenarios by implementing automated backup policies to Azure Blob Storage, meeting 24-hour RTO and 4-hour RPO targets.',
      'Reduced email infrastructure costs by 60% by migrating 20 mailboxes from Google Workspace to Microsoft 365.',
    ],
  },
  {
    name: 'Ekvayu Tech Private Limited',
    position: 'Cybersecurity Analyst Intern',
    url: 'https://ekvayu.com',
    startDate: '2025-06-01',
    endDate: '2025-08-31',
    summary: `<a href='https://ekvayu.com'>Ekvayu Tech</a> is a Noida-based deep-tech cybersecurity
    company building email phishing detection, data protection, and threat monitoring products for
    enterprise and government customers. I worked the offensive side: testing their own tooling and
    hardening the infrastructure it was built on.`,
    highlights: [
      'Discovered and reduced the attack surface of an internally developed security tool by remediating 15+ critical vulnerabilities via VAPT using Burp Suite and OWASP ZAP.',
      'Secured code repository infrastructure by migrating a GitLab server while implementing configuration hardening, access controls, and least-privilege policies.',
      'Resolved 10 vulnerabilities across production servers and internal applications through Nessus-based threat assessments.',
    ],
  },
  {
    name: 'Kendriya Karamchari Sehkari Grih Nirman Samiti Ltd',
    position: 'Web Developer',
    url: 'https://kksociety.com',
    startDate: '2023-05-29',
    endDate: '2023-08-22',
    summary: `A housing society in Noida with roughly 1,000 members, which had just won a long land
    dispute in the Supreme Court and needed member records it could actually query. I owned the site,
    the member database, and the hosting migration, and trained non-technical office staff to run all
    three.`,
    highlights: [
      'Managed end-to-end migration of the existing website to a more cost-effective host, reducing annual expenditure by 40%.',
      'Mapped records for 1,000 members and built custom PHP filters, letting leadership retrieve member information 80% faster.',
      'Cut average member travel time by two hours by extending the database to store historical payment information, so members could access previous bills online.',
    ],
  },
  {
    name: 'Hoonar Tekwurks',
    position: 'Software Engineering Intern',
    url: 'https://hoonartek.com',
    startDate: '2022-06-15',
    endDate: '2022-08-23',
    summary: `A software development consultancy headquartered in Pune. I built the authentication
    layer for an internal project and the REST API behind it.`,
    highlights: [
      'Raised an internal tool to OWASP ASVS Level 2 by building an authentication API with Java Spring Boot and Keycloak.',
      'Delivered internal knowledge-sharing sessions on Log4j and debugging to a team of 8 engineers, getting structured logging into the team coding standard.',
    ],
  },
  {
    name: 'Woodstock School',
    position: 'Information Technology Intern',
    url: 'https://woodstockschool.in',
    startDate: '2018-02-07',
    endDate: '2019-05-25',
    summary: `An international residential school in Mussoorie, where I was also a student from 2010
    to 2019. I built internal tooling on the Microsoft Power Platform for the maintenance, counselling,
    and security departments, and worked with the IT team on campus network and access control.`,
    highlights: [
      'Saved 50 hours of manual work quarterly by building an invoice management system with Microsoft PowerApps and SharePoint.',
      'Consolidated a 7-step manual student laptop-loan process into 1 automated flow with Power Automate, saving 12 hours weekly.',
      'Proposed and implemented biometric check-in across 3 major campus locations, improving dormitory attendance tracking and campus access control.',
      'Built a Power BI dashboard for the counselling department that contributed to a 20% increase in student counselling sessions.',
    ],
  },
];

export default work;
