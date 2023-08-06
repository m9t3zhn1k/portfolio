import { Technology } from '@app/shared'

export interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly thumbnailPreload: string
  readonly thumbnail: string
  readonly technologies: Technology['id'][]
  readonly deployLink: string
  readonly repositoryLink: string
}
