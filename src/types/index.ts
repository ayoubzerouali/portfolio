// Project type definition
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  date: string;
  client?: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  content: string[];
  features?: string[];
  screenshots?: {
    url: string;
    caption?: string;
  }[];
}

// Blog post type definition
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  readTime: number;
  tags: string[];
  content: BlogContent[];
}

// Blog content types
export type BlogContent = 
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; content: string; language?: string }
  | { type: 'image'; url: string; caption?: string }
  | { type: 'quote'; content: string; author?: string };