import { Skill, Project, Certificate, Experience } from '../types';

export const skills: Skill[] = [
  // Backend Skills
  { name: 'Java', level: 90, category: 'backend' },
  { name: 'Spring Boot', level: 85, category: 'backend' },
  { name: 'MySQL', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Redis', level: 70, category: 'backend' },
  
  // Testing Skills
  { name: 'Postman', level: 90, category: 'testing' },
  { name: 'API Testing', level: 90, category: 'testing' },
  { name: 'Selenium', level: 85, category: 'testing' },
  { name: 'Automation Testing', level: 80, category: 'testing' },
  { name: 'Manual Testing', level: 80, category: 'testing' },
  { name: 'Newman', level: 80, category: 'testing' },
  
  // Tools Skills
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'Jenkins', level: 80, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'CI/CD Pipelines', level: 80, category: 'tools' },
  
  // Security Skills
  { name: 'Basic Cybersecurity', level: 70, category: 'security' },
  { name: 'Data Validation', level: 75, category: 'security' },
  { name: 'SQL Injection Prevention', level: 70, category: 'security' },
  
  // Web Technologies
  { name: 'HTML/CSS/JavaScript', level: 70, category: 'frontend' },
  { name: 'Thymeleaf', level: 65, category: 'frontend' },
  
  // Mobile Development (keeping existing)
  { name: 'Swift', level: 90, category: 'mobile' },
  { name: 'iOS Development', level: 90, category: 'mobile' },
  { name: 'SwiftUI', level: 85, category: 'mobile' }
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