
import React from 'react';
import { NavItem, Skill } from './types';
import { 
  Code2, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Cpu, 
  Globe, 
  Layers, 
  GitBranch,
  Search
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Programming' },
  { name: 'C++', category: 'Programming' },
  { name: 'JavaScript', category: 'Programming' },
  { name: 'HTML', category: 'Programming' },
  { name: 'CSS', category: 'Programming' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
];

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com', icon: <Github className="w-5 h-5" /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jagrut-shah-56b4b93aa/', icon: <Linkedin className="w-5 h-5" /> },
  { label: 'Email', href: 'mailto:jagrut@example.com', icon: <Mail className="w-5 h-5" /> },
];
