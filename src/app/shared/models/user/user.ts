import { Technology } from '@app/shared'

export interface User {
  id: string
  name: string
  location: string
  technologies: Technology['id'][]
}
