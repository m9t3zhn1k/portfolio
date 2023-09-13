import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core'
import {
  LocalStorageKey,
  LocalStorageService,
  Theme,
  ThemeService,
  themeIconSources,
} from '@app/core'
import { SvgComponent } from '@app/core/components/svg'
import { TranslocoService } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgComponent],
})
export class SettingsWidgetComponent {
  private readonly translocoService = inject(TranslocoService)
  private readonly localStorageService = inject(LocalStorageService)
  private readonly themeService = inject(ThemeService)

  protected readonly currentLanguage = signal<string>(this.translocoService.getActiveLang())

  protected readonly themeIcon = computed(() =>
    this.themeService.theme() === Theme.Dark ? themeIconSources.dark : themeIconSources.light,
  )

  protected changeLanguage(): void {
    this.translocoService.setActiveLang(this.currentLanguage() === 'en' ? 'ru' : 'en')

    const language = this.translocoService.getActiveLang()

    this.currentLanguage.set(language)
    this.localStorageService.setItem(LocalStorageKey.Language, language)
  }

  protected toggleTheme(): void {
    this.themeService.toggle()
  }
}
