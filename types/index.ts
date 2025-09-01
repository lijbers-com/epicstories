export interface Story {
  id: string
  slug: string
  publishedAt: Date
  updatedAt: Date
  featured: boolean
  order: number
  
  title: string
  tagline: string
  category: string
  tags: string[]
  
  thumbnail: string
  heroImage: string
  galleryImages?: string[]
  
  summary: string
  content: string
  
  client: string
  duration: string
  services: string[]
  technologies: string[]
  
  metaTitle?: string
  metaDescription?: string
  ogImage?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  image?: string
  social?: {
    linkedin?: string
    github?: string
    twitter?: string
  }
}