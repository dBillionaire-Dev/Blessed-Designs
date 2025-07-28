export interface Project {
  id: string
  title: string
  shortDescription: string 
  description: string 
  image: string
  images: string[] 
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  social: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}
