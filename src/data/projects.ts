export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  /**
   * Optional. Without a genuine screenshot, `Cell.tsx` draws a typographic
   * cover from the title instead — several of these are client systems with no
   * public URL, and a stock image would say nothing true about the work.
   */
  image?: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
}

const entries: Project[] = [
  {
    // No public repository yet: this is a client system, and the pipeline
    // definition is theirs. The card describes the shape and the decisions
    // rather than linking source that cannot be published. A sanitised,
    // generic version is the single highest-value artifact still missing from
    // this page — when it exists, its link belongs here.
    title: 'DevSecOps Delivery Pipeline',
    subtitle: 'Seven-stage GitLab CI pipeline where scanning gates the deploy',
    date: '2026-07-31',
    desc: 'A delivery pipeline for a commercial security product, built so that security scanning blocks the deploy rather than reporting on it afterwards. Ruff, mypy, and hadolint run first, so a lint or type failure stops the run before anything is built. Gitleaks then checks for committed secrets, Bandit and Semgrep for SAST, Checkov against Dockerfiles and Compose definitions, and Trivy across both the filesystem and the built image. OWASP ZAP and smoke tests run against the deployed service. The same gates apply to development, staging, and production across three locations — the point being that a gate only production enforces is a gate that gets discovered late.',
    tech: [
      'GitLab CI',
      'Docker',
      'Gitleaks',
      'Semgrep',
      'Bandit',
      'Checkov',
      'Trivy',
      'OWASP ZAP',
    ],
    featured: true,
  },
  {
    // Filed as observability rather than security on purpose. The finding was
    // reached from the monitoring side — the numbers did not reconcile — and
    // its consequence is that no measurement of the system could be trusted,
    // which is a platform problem before it is a security one.
    title: 'Sandbox Attribution Failure',
    subtitle: 'An observability defect found from the monitoring side',
    date: '2026-07-15',
    desc: 'While instrumenting a malware detonation sandbox — each submitted file or URL runs in its own container — the metrics did not reconcile with the sample counts. Container names turned out to be drawn from a reused numeric sequence, so a single name identified different samples at different times. Neither metrics nor logs could be attributed back to the analysis that produced them, which means no measurement of throughput, failure rate, or detonation outcome was trustworthy, and historical data could not be reconstructed. Two further critical defects surfaced from the same investigation.',
    tech: ['Prometheus', 'Grafana', 'Docker', 'Observability'],
    featured: true,
  },
  {
    title: 'btrfsparser',
    subtitle: 'Forensic BTRFS filesystem parser',
    link: 'https://github.com/VaibhavJain2609/btrfsparser',
    date: '2026-02-11',
    desc: 'Recovers filesystem metadata and file contents from raw BTRFS disk images. Parses the superblock, walks the chunk tree to translate logical addresses to physical ones, traverses B-trees for inodes and directory entries, and reassembles files from inline, compressed, and regular extents — validating CRC32C checksums along the way. Ships a full technical walkthrough in the repository. Reading on-disk extent and B-tree structure directly is the same skill that makes overlay2 layer analysis and volume-level container incident response tractable.',
    tech: ['Python', 'Filesystem Forensics', 'Reverse Engineering'],
    featured: true,
  },
  {
    title: 'MedConnect',
    subtitle: 'Multi-tenant clinic platform',
    // Private for now; the owner intends to make it public.
    link: 'https://github.com/VaibhavJain2609/MedConnect',
    date: '2026-04-01',
    desc: 'Multi-tenant clinic architecture with scoped data access, and an ABDM-compliant patient consent system with link codes, approval workflows, and revocation support. Resolved 12+ production issues including N+1 queries, race conditions, and security misconfigurations.',
    tech: [
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'TypeScript',
      'Docker',
      'Keycloak',
      'Redis',
    ],
    featured: true,
  },
  {
    title: 'KK Society',
    subtitle: 'Member portal for a 970-member society',
    date: '2025-12-01',
    desc: 'Audited and enforced role-based access control and rate limiting across 90+ API endpoints, closing broken access control and hardening against denial of service. Built a service request workflow with state tracking, and integrated the RazorPay gateway for member collections.',
    tech: [
      'Next.js',
      'Spring Boot',
      'PostgreSQL',
      'TypeScript',
      'Docker',
      'Auth0',
    ],
    featured: true,
  },
  {
    title: 'Incident Response and Malware Analysis',
    subtitle: 'Memory forensics and IOC extraction',
    date: '2025-11-01',
    desc: 'Identified indicators of compromise — hardcoded C2 URLs, malicious hashes — through static analysis with strings, exiftool, and Detect It Easy. Used Volatility 3 for memory forensics to surface malicious processes and network artefacts, and automated hash extraction and VirusTotal lookups in Python.',
    tech: ['Volatility 3', 'Wireshark', 'Kali Linux', 'Python'],
    featured: true,
  },
  {
    // Not `featured`: it earns a place in the list, but should not displace
    // client work from the homepage's three slots. Flip the flag to lead with it.
    title: 'This site',
    subtitle: 'Statically exported Next.js portfolio',
    date: '2026-08-12',
    desc: 'The site you are reading, built as a static export with no server runtime. Notable less for the pages than for the discipline underneath: a live readout that was re-rendering React 40 times a second was moved to an out-of-band ref write, with a regression test pinning the absence of re-renders; the build-time type check is proven to gate the build by injecting a real type error; dependency overrides were verified inert by diffing the emitted CSS byte-for-byte; and a post-build integrity gate checks robots directives, canonicals, share metadata, local images, internal links and anchor fragments across every exported page.',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Vitest',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    title: 'Wikipedia Search Engine',
    subtitle: 'tf-idf and PageRank over a local corpus',
    link: 'https://github.com/VaibhavJain2609/Wikipedia_Search_Engine',
    date: '2024-02-20',
    desc: 'Search across a local Wikipedia dump, ranking results by tf-idf scoring combined with PageRank over the article link graph.',
    tech: ['Python', 'Flask', 'SQLite'],
  },
  {
    title: 'Savis3',
    subtitle: 'Statistics visualisation coursework',
    link: 'https://github.com/VaibhavJain2609/savis3',
    date: '2024-05-20',
    desc: 'Web application for entering a dataset and exploring it through generated plots and summary statistical measures. Built for a statistics course.',
    tech: ['JavaScript', 'Data Visualisation'],
  },
];

/**
 * Newest first, derived from `date` rather than from the order entries happen
 * to be typed in. Both surfaces render this array in order and print a year on
 * every card, so the sequence is a claim the data has to back — hand order put
 * 2024-02 above 2024-05 under "Earlier work" and listed the homepage's "Recent
 * projects" out of sequence. Sorting here means a new entry places itself.
 */
const data: Project[] = [...entries].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export default data;
