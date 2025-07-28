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
    id: 'doctor-appointment',
    name: 'Doctor Appointment Booking System',
    description: 'Full-stack healthcare platform to streamline doctor-patient interactions, enabling appointment discovery, real-time booking, and role-based dashboards with instant booking reflection on doctor dashboard.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    status: 'public',
    accessLevel: 1
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
    company: 'OFBUSINESS',
    role: 'Backend Automation Engineer',
    duration: 'October 2024 - Present',
    location: 'Gurugram, India',
    description: [
      'Designed and implemented scalable API test automation frameworks using Node.js, Newman, and Postman, accelerating release cycles and improving test coverage by 60%',
      'Automated validation of complex RESTful APIs and backend logic, reducing critical bugs in production',
      'Performed data validation across SQL, MongoDB, and Redis, enhancing backend reliability and ensuring end-to-end data integrity',
      'Integrated API tests into CI/CD pipelines, enabling automated regression testing and reducing manual QA efforts by 50%',
      'Created reusable test collections and scripts using Postman and executed them with Newman for continuous and scalable API testing'
    ],
    tech: ['Node.js', 'Postman', 'Newman', 'Git', 'SQL', 'MongoDB', 'Redis', 'REST APIs'],
    accessGranted: false
  },
  {
    id: 'infosys',
    company: 'INFOSYS',
    role: 'iOS Engineer Intern',
    duration: 'January 2024 - July 2024',
    location: 'Mysore, India',
    description: [
      'Led end-to-end development of the Learnify Learners App, a training and learning management system with separate interfaces for learners, teachers, and admins, supporting 200+ users',
      'Built a secure authentication flow with role-based routing — learners and teachers were redirected to their respective dashboards based on signup role selection',
      'Implemented custom text-to-speech features to improve accessibility for specially-abled users',
      'Integrated real-time backend services using Firebase and developed API connectivity using Node.js for authentication and data sync'
    ],
    tech: ['SwiftUI', 'Node.js', 'Firebase'],
    accessGranted: false
  },
  {
    id: 'psr-metals',
    company: 'PSR METALS PVT. LTD.',
    role: 'Software Developer',
    duration: 'June 2023 - August 2023',
    location: 'Muzzafarnagar',
    description: [
      'Designed and deployed a responsive website for a product-based manufacturing company, boosting online presence and helping increase business inquiries by over 40%',
      'Implemented basic SEO strategies and integrated an enquiry form using Formspree to improve customer engagement and lead conversion'
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Formspree'],
    accessGranted: false
  }
];