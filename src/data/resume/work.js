/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Kendriya Karamchari Sehkari Grih Nirman Samiti Ltd',
    position: 'Web Developer',
    url: 'https://kksociety.com',
    startDate: '2023-05-29',
    endDate: '2023-08-22',
    summary: `Kendriya Karamchari Sehkari Grih Nirman Samiti Ltd is a housing society situated in Noida, India. 
    After having finally won a long battle against the Noida Authority in the Supreme Court, the society is finally in the
    process of obtaining the land required for the members of the community to build their homes. As a web developer,
    I was responsible for managing the society's website and ensuring that it is up-to-date and user-friendly. As the magerial authority
    of the society are not tech-savvy, I was also responsible for training them on how to use the website. I was also responsible for
    developing filters and search functionality for the website to make it easier for the management to find the information they need, 
    rather having to spend hours on creating excel sheets for the required. I also managed the migration of the
   website to a more cost-effective web hosting service. I also customized their existing database, wihch would allow 
   them to store users' historical payment information, which would help the users to access their previous bills online.
    `,
    highlights: [
      'Managed end-to-end process of migrating existing website to a more cost-effective web hosting service, reducing annual expenditure by 40%.',
      'Accurately mapped data for 1,000 members, enabling leadership to retrieve member information 80% faster through development of custom filters with PHP.',
      'Reduced member travel time by average of 2 hours by upgrading database to store historical payment information, facilitating user access to previous bills online.',
    ],
  },
  {
    name: 'Hoonar Tekwurks',
    position: 'Software Engineering Intern',
    url: 'http://https://hoonartek.com/',
    startDate: '2022-06-15',
    endDate: '2022-08-23',
    summary: `Hoonar Tekwurks is a Software Development company, headquartered in Pune, India. Hoonar Tekwurks works with 
    clients to develop software solutions that help them achieve their business goals. As a Software Engineering Intern,
    I was responsible for developing an authentication system for an internal project, using technologies like Java Spring Boot and keycloak.
    I also developed a REST API for the same project, which would allow the front-end to interact with the back-end, enhacing the capabilities
    through the help of keycloak. I also provided presentation of different technologies to the team, which helped them to understand the
    technologies better and implement them in their upcoming projects.`,
    highlights: [
      'Increased OWASP security to level 2 for an internal tool by developing an authentication API with Java Spring Boot and Keycloak.',
      'Delivered internal knowledge-sharing sessions on Log4J and debugging to a team of 8 engineers, successfully integrating logging into team’s coding standard.',
    ],
  },
  {
    name: 'Woodstock School',
    position: 'Information Technology Department Intern',
    url: 'https://woodstockschool.in',
    startDate: '2018-02-07',
    endDate: '2019-05-25',
    // summary: `Arthena is a Series A Company funded by <a href="https://www.anthemis.com/">Athemis</a>,
    // <a href="https://foundationcapital.com">Foundation Capital</a>, and <a href="https://ycombinator.com/">YC</a>.
    // We develop quantitative strategies to predict the value of fine art and build investment prod
    // I ran a 20-person product and engineering org for 8 years. We were acquired by
    // <a href="https://www.masterworks.com/">Masterworks</a> in 2023.`,
    summary: `Woodstock School is an international school situated in Mussoorie, India. I began my studies at Woodstock
    in 2010 and graduated in 2019. As an intern in the Information Technology Department, I worked on a wide variety of projects for
    different departments of the school. I worked extensively with the Microsoft Power Platform, developing PowerApps and Power Automate
    solutions for departments such as the Maintenance Department, Counseling Department, and Security Department. As the Head of Media
    in the Student Council, I was also responsible for managing the student requests for the IT Department, and ensuring that the requests
    were appropriately addressed. I developed a system for the school's maintenance department, which would allow them to track the 
    utilities billing for staff, and generate reports for the same. I also developed a system using PowerBi for the school's counseling department,
    which would allow them to track the students' progress and provide them with the required support, and make data centric decisions in the future.
    For the Security Department, I worked on implementing a biometric system to 3 major locations of our school campus, which allowed for
    the department to track the entry and exit of the staff and students, and ensure the security of the campus.`,
    highlights: [
      'Saved 50 hours of manual labour quarterly by developing an invoice management system through Microsoft PowerApps and SharePoint.',
      'Consolidated 7 manual steps to 1 automated process for student laptop-loaning by using Microsoft Power-Automate, saving 12 manual hours weekly.',
      'Enhanced student security as measured by increased student attendance, by proposing and implementing a bio-metric check-in system in dormitories.',
      'Generated 20% increase in student counseling sessions by developing a PowerBi dashboard for the counseling department, enabling data-driven decision-making.',
      'Developed the long-term technical vision and roadmap within, and often beyond, the scope of my teams. Evolved the roadmap to meet anticipated future requirements and infrastructure needs.',
      'Researched and presenetd end-point management solutions to streamline OS deployment and reduce bandwidth comsumption',
      'Set up an emergency notification system for the school, which would allow the school to send out emergency notifications to the students, staffs, and parents in case of an emergency.',
    ],
  },
  {
    name: 'Woodstock School',
    position: 'Web Development Intern',
    url: 'http://woodstockschool.in',
    startDate: '2018-09-01',
    endDate: '2019-05-25',
    summary: `As a Web Development Intern in the Communication Department at Woodstock School, I was responsible for developing the school's website, and ensuring 
    that it is up-to-date and user-friendly. I was the lead intern for a team of 3 interns, and was responsible for managing the team's tasks
    and ensuring that the tasks were completed on time. I was also responsible for teaching the interns how to use the website's CMS, and how to
    update the website. I also deployed a staged website, to remove redundant code and plugins to improve the website's performance. The key project,
    however, was the development of the school's internal sports management system, which would allow the school's sports department to manage the
    sports events, and track the students' progress in the sports events. The system was developed using WordPress, and was integrated with the school's
    website, to ensure that the students and staff could access the system easily.`,
    highlights: [
      'Improved School\'s website performance by 30% by deploying a staged website, removing redundant code and plugins.',
      'Developed a sports management system for the school\'s sports department, enabling them to manage sports events and track student progress.',
      'Led and taught a team of 3 interns on how to use the website\'s CMS and update the website, decreasing the workload on communication department by 50%.',
    ],
  },
  {
    name: 'Woodstock School',
    position: 'Math Department Intern',
    url: 'https://woodstockschool.in',
    startDate: '2018-09-01',
    endDate: '2019-05-25',
    summary: `As a Math Department Intern at Woodstock School, I was responsible for assisting the Math Department in providing
    head of department assistance with grading, lesson planning, and teaching the students in course levels lower than AP Calculus.`,

    highlights: [
      'Graded 100+ student assignments and tests for Non-AP level math courses, providing detailed feedback to students and teachers.',
      'Assisted in teaching lower level math courses during dorm level study halls, increasing student understanding of math concepts.',
      'Provided head of department assistance with lesson planning and grading, reducing workload by 20%.',
    ],
  },

];

export default work;
