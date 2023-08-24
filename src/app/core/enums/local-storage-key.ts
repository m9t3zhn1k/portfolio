import { ValueOf } from '../types'

export const LocalStorageKey = {
  Language: 'language',
} as const

export type LocalStorageKey = ValueOf<typeof LocalStorageKey>
