const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Heroku',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Firebase',
    competency: 3,
    category: ['Web Development', 'Tools', 'Databases'],
  },
  {
    title: 'MySQL/SQLite3/SQL',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Microsoft PowerAutomate',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Microsoft PowerApps',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Microsoft PowerBi',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'WordPress',
    competency: 5,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'JetBrains Suite',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Visual Studio Code',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Hindi',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Angular',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Spring Boot',
    competency: 3,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Azure',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
