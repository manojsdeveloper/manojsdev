const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Manoj Ramesh',
  role: 'Full Stack Developer',
  company: 'Glencore',
  description: [
    ' I am a dynamic and proactive DotNet Full Stack Developer with in-depth professional experience for more than 10 years, academic knowledge, practical project & industry exposure; have effective analytical ability augmenting a highly creative and expressive mind.'

    // It is so exciting when I create innovative products, solutions & services for large enterprises such <strong>Cognizant</strong>, <strong>BNP Paribas<strong>, and <strong>Glencore</strong>.
    
    // My keen interest towards software development helped me many biggest problems for my clients, I am sharing one of the examples here. I helped Glencore to save from lot of critical issues by accessing multiple external sources causes slowness on the response by façade system mechanism.
    
    // Technically expert with expertise in a wide range of technologies starting from <strong>Asp.Net/C#</strong> and <strong>Angular(RxJs, NgRx, Lodash)</strong> & accomplished successful migration from <strong>Angular 6 to Angular 14</strong>.
    
    // Proactive, creative thinker producing new ideas & using innovation to redefine and meet the time & budgetary constraints.
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
  'C#',
  '.Net Core',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'Redux-NgRx',
  'SASS',
  'Docker',
  'Git',
  'CI/CD',
  'Jasmine',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'manojrameshit@outlook.com',
}

export { about, projects, skills, contact }
