import { DOCUMENT } from '@angular/common'
import { Injectable, effect, inject, signal } from '@angular/core'
import { LocalStorageKey, Theme } from '@app/core'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly localStorageService = inject(LocalStorageService)
  private readonly document = inject(DOCUMENT)

  constructor() {
    this.initThemeLinkElement()
  }

  public readonly theme = signal<Theme>(this.get())
  private readonly themeLinkElement = signal<HTMLLinkElement | null>(null)

  public readonly applyTheme = effect(
    () => {
      this.themeLinkElement.update(element => {
        if (element) {
          element.href = `${this.theme()}.css`
          return element
        }
        return null
      })
    },
    { allowSignalWrites: true },
  )

  public get(): Theme {
    return (this.localStorageService.getItem(LocalStorageKey.Theme) as Theme) ??
      this.isDarkColorSchemePrefered()
      ? Theme.Dark
      : Theme.Light
  }

  public toggle(): void {
    this.theme.update(theme => (theme === Theme.Dark ? Theme.Light : Theme.Dark))
    this.localStorageService.setItem(LocalStorageKey.Theme, this.theme())
  }

  private initThemeLinkElement(): void {
    const headElement = this.document.getElementsByTagName('head')[0]
    const themeLinkElement = this.document.createElement('link')

    themeLinkElement.rel = 'stylesheet'

    headElement.appendChild(themeLinkElement)
    this.themeLinkElement.set(themeLinkElement)
  }

  private isDarkColorSchemePrefered(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}
