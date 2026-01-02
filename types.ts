
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface AIExpertise {
  category: string;
  skills: string[];
  icon: string;
}
