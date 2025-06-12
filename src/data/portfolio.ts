import { Skill, Project, Certificate, Experience } from '../types';

export const skills: Skill[] = [
  { name: 'Java', level: 90, category: 'backend' },
  { name: 'JavaScript', level: 85, category: 'backend' },
  { name: 'Swift', level: 90, category: 'mobile' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'C++', level: 75, category: 'backend' },
  { name: 'iOS Development', level: 90, category: 'mobile' },
  { name: 'SwiftUI', level: 85, category: 'mobile' },
  { name: 'Selenium', level: 90, category: 'testing' },
  { name: 'Automation Testing', level: 90, category: 'testing' },
  { name: 'Manual Testing', level: 85, category: 'testing' },
  { name: 'API Testing', level: 85, category: 'testing' },
  { name: 'Postman', level: 90, category: 'testing' },
  { name: 'Jenkins', level: 80, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'Firebase', level: 85, category: 'backend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'CI/CD', level: 80, category: 'tools' },
  { name: 'Ethical Hacking', level: 75, category: 'security' },
  { name: 'Penetration Testing', level: 70, category: 'security' },
  { name: 'Kali Linux', level: 75, category: 'security' }
];

export const projects: Project[] = [
  {
    id: 'queueskipper',
    name: 'QueueSkipper.app',
    description: 'Native iOS app to streamline takeaway food ordering, enhancing efficiency and reducing wait times with real-time order processing.',
    tech: ['Swift', 'Node.js', 'Firebase', 'MongoDB'],
    github: 'https://github.com/vinayakbansal/queueskipper',
    status: 'public',
    accessLevel: 1
  },
  {
    id: 'learnify',
    name: 'Learnify.sys',
    description: 'Training & Learning Management System (TLMS) native iOS app with Role-Based Access Control for educators, learners, and administrators.',
    tech: ['Swift', 'SwiftUI', 'Firebase', 'Node.js'],
    github: 'https://github.com/vinayakbansal/learnify',
    status: 'public',
    accessLevel: 1
  },
  {
    id: 'automation-framework',
    name: 'TestFramework.jar',
    description: 'Scalable UI automation framework built with Selenium and Java for enhanced front-end testing and seamless user experience validation.',
    tech: ['Java', 'Selenium', 'TestNG', 'Jenkins'],
    status: 'classified',
    accessLevel: 3
  },
  {
    id: 'api-automation',
    name: 'APIValidator.js',
    description: 'Automated API testing scripts using Postman and JavaScript, improving system performance and reducing manual validation time by 30%.',
    tech: ['JavaScript', 'Postman', 'Node.js', 'CI/CD'],
    status: 'classified',
    accessLevel: 2
  }
];

export const certificates: Certificate[] = [
  {
    id: 'ceh',
    name: 'Certified Ethical Hacker (CEH V12)',
    issuer: 'EC-Council',
    date: '2024',
    credentialId: 'CEH-V12-2024-VB',
    icon: 'Shield'
  },
  {
    id: 'cpsm',
    name: 'Certified Professional Scrum Master',
    issuer: 'Skillfront',
    date: '2024',
    credentialId: 'CPSM-2024-VB',
    icon: 'Users'
  },
  {
    id: 'java-hackerrank',
    name: 'Java Programming Certification',
    issuer: 'HackerRank',
    date: '2024',
    credentialId: 'HR-JAVA-2024-VB',
    icon: 'Code'
  },
  {
    id: 'ztca',
    name: 'Zero Trust Associate (ZTCA)',
    issuer: 'Zscaler',
    date: '2024',
    credentialId: 'ZTCA-2024-VB',
    icon: 'Lock'
  }
];

export const experience: Experience[] = [
  {
    id: 'ofbusiness',
    company: 'OfBusiness/OFB Tech Pvt. Ltd.',
    role: 'Software Development Engineer in Test',
    duration: 'October 2024 - Present',
    description: [
      'Developed and optimized backend systems by creating automated API scripts using Postman and JavaScript, improving system performance and reducing manual validation time by 30%',
      'Built scalable UI automation frameworks with Selenium and Java, enhancing front-end functionality and ensuring seamless user experiences',
      'Integrated automated tests into CI/CD pipelines, optimizing deployment efficiency and enabling faster release cycles',
      'Collaborated with cross-functional teams to ensure quality delivery and maintain high testing standards'
    ],
    tech: ['Java', 'JavaScript', 'Selenium', 'Postman', 'CI/CD', 'Jenkins'],
    accessGranted: false
  },
  {
    id: 'infosys',
    company: 'Infosys Mysore DC',
    role: 'iOS App Developer Intern',
    duration: 'January 2024 - July 2024',
    description: [
      'Led the development of Learnify, a Training & Learning Management App, featuring Admin, Educators, and Learner applications using SwiftUI',
      'Integrated Firebase for real-time database management, authentication, and cloud storage solutions',
      'Collaborated with cross-functional teams to design and refine app architecture, ensuring robustness and scalability',
      'Managed tasks and workflows using Jira, ensuring timely delivery and effective team coordination',
      'Selected among top 100 students for the prestigious Apple-Infosys iOS Development Program'
    ],
    tech: ['Swift', 'SwiftUI', 'Firebase', 'Node.js', 'Jira'],
    accessGranted: false
  }
];