import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { SvgComponent } from '@app/core/components/svg'
import { LanguageService, ThemeService } from '@app/core/services'

@Component({
  standalone: true,
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, SvgComponent],
})
export class SettingsWidgetComponent {
  private readonly themeService = inject(ThemeService)
  private readonly languageService = inject(LanguageService)

  protected readonly currentLanguage = this.languageService.currentLanguage

  protected readonly themeIcon = this.themeService.themeIcon

  protected changeLanguage(): void {
    this.languageService.changeLanguage()
  }

  protected toggleTheme(): void {
    this.themeService.toggle()
  }
}
