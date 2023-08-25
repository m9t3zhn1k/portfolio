import { Injectable, inject, signal } from '@angular/core'
import { LocalStorageKey, Theme } from '@app/core'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly localStorageService = inject(LocalStorageService)

  public readonly theme = signal<Theme>(this.get())

  public get(): Theme {
    return (this.localStorageService.getItem(LocalStorageKey.Theme) as Theme) ?? Theme.Dark
  }

  public toggle(): void {
    this.theme.update(theme => (theme === Theme.Dark ? Theme.Light : Theme.Dark))
    this.localStorageService.setItem(LocalStorageKey.Theme, this.theme())
  }
}
