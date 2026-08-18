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
  // The awarded title was the generic "Intern", so the descriptor is a choice.
  // This one is picked for how it screens: "DevOps" and "Network Security" are
  // both terms recruiters actually filter on, and both are honestly claimed by
  // the bullets below. "DevSecOps Intern" was the other candidate and is just
  // as true of the pipeline — but "DevSecOps" does not contain "DevOps" as a
  // substring, so a literal keyword filter for the more common term would miss
  // it. The title keeps "DevOps"; the summary carries "DevSecOps", which is
  // indexed too.
  //
  // Named tools are the point of this entry. "Built deployment pipelines" is
  // what every DevOps resume says; the gate list is what distinguishes a
  // pipeline that enforces security from one that reports on it afterwards.
  {
    name: 'Ekvayu Tech Private Limited',
    position: 'DevOps and Network Security Intern',
    url: 'https://ekvayu.com',
    startDate: '2026-06-12',
    endDate: '2026-07-31',
    summary: `A second stint at <a href='https://ekvayu.com'>Ekvayu Tech</a>, on the build and
    network side rather than the offensive one. I owned the delivery pipeline — a seven-stage
    GitLab CI pipeline built as DevSecOps, where scanning gates the deploy instead of following
    it — along with monitoring for the container fleet and the firewall and segmentation work
    underneath it.`,
    highlights: [
      'Built a seven-stage GitLab CI pipeline in which security scanning gates the deploy rather than following it: Gitleaks for committed secrets, Bandit and Semgrep for SAST, Checkov against Dockerfiles and Compose definitions, and Trivy across both the filesystem and the built image.',
      'Fronted the pipeline with Ruff, mypy, and hadolint so a lint or type failure stops the run before anything is built, and extended it past the deploy with OWASP ZAP and smoke tests against the running service.',
      'Standardised promotion from development through to production across three locations, applying the same gates to every environment rather than to production alone.',
      'Stood up Prometheus and Grafana monitoring across 100+ Docker Compose containers running at three locations.',
      "Found three critical defects in the product's detonation sandbox, which runs each submitted file or URL in its own container: container names were drawn from a reused numeric sequence, so one name identified different samples over time and neither metrics nor logs could be attributed to the analysis that produced them.",
      'Configured and hardened OPNsense firewalls, covering rule design and security policy configuration.',
      'Designed and implemented VLAN segmentation to isolate network segments and limit lateral movement.',
    ],
  },
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
