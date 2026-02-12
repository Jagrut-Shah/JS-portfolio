

export interface Skill {
  name: string;
  category: 'Programming' | 'Tools';
  icon?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}
