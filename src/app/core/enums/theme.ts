import { ValueOf } from '@app/core'

export const Theme = {
  Dark: 'dark',
  Light: 'light',
} as const

export type Theme = ValueOf<typeof Theme>

export const themeIconSources: Record<Theme, string> = {
  dark: 'assets/icons/themes/dark.svg#icon',
  light: 'assets/icons/themes/light.svg#icon',
}
