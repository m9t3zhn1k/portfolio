import { ValueOf } from '@app/core'

export const LocalStorageKey = {
  Language: 'language',
  Theme: 'theme',
} as const

export type LocalStorageKey = ValueOf<typeof LocalStorageKey>
