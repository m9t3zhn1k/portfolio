import { Injectable, inject, signal } from '@angular/core'
import { LocalStorageKey } from '@app/core/enums'
import { TranslocoService } from '@ngneat/transloco'
import { LocalStorageService } from './local-storage.service'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly translocoService = inject(TranslocoService)
  private readonly localStorageService = inject(LocalStorageService)

  public readonly currentLanguage = signal<string>(this.translocoService.getActiveLang())

  public changeLanguage(): void {
    this.translocoService.setActiveLang(this.currentLanguage() === 'en' ? 'ru' : 'en')

    const language = this.translocoService.getActiveLang()

    this.currentLanguage.set(language)
    this.localStorageService.setItem(LocalStorageKey.Language, language)
  }
}
