export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'testing' | 'security' | 'tools';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status: 'classified' | 'public' | 'archived';
  accessLevel: number;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  tech: string[];
  accessGranted: boolean;
}

export interface TerminalCommand {
  command: string;
  description: string;
  action: () => void;
}