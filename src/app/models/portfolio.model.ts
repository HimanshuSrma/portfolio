export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  isOngoing: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  location?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'other';
  status: 'completed' | 'ongoing' | 'planned';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'mobile' | 'tools' | 'other';
  proficiency?: number; // 1-100
  icon?: string;
  svg?: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin?: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  image?: string;
  resumeUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}