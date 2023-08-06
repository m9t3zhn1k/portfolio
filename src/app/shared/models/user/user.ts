import { Technology } from '../technology/technology'

export interface User {
  id: string
  name: string
  location: string
  technologies: Technology['id'][]
}
