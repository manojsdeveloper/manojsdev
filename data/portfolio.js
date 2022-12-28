const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Manoj Ramesh',
  role: 'Full Stack Developer',
  company: 'Glencore',
  description: [
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  ],
  resume: 'https://drive.google.com/file/d/1Xo-Pnk_0lNHkUpewYaD-m4mNzFq7OVfh/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/manojrdev/',
    github: 'https://github.com/manojsdeveloper',
    hashnode: 'https://manojsdev.hashnode.dev/'
  },
  greetingEmoji: '👋',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 1',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 2',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 3',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 4',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'Redux-NgRx',
  'SASS',
  'C#',
  '.Net Core',
  'Git',
  'CI/CD',
  'Jasmine',
  'Docker',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'manojrameshit@outlook.com',
}

export { about, projects, skills, contact }
