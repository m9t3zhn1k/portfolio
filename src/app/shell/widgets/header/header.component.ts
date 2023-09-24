import { OverlayModule, ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay'
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LanguageService, SvgComponent, ThemeService } from '@app/core'
import { TranslocoDirective } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, OverlayModule, TranslocoDirective, SvgComponent],
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService)
  private readonly languageService = inject(LanguageService)
  protected readonly scrollStrategyOptions: ScrollStrategyOptions = inject(ScrollStrategyOptions)

  protected readonly isMobMenuOpen = signal<boolean>(false)

  protected readonly themeIcon = this.themeService.themeIcon
  protected readonly currentLanguage = this.languageService.currentLanguage

  protected get scrollStrategy(): ScrollStrategy {
    return this.scrollStrategyOptions.block()
  }

  protected toggleMobMenu(): void {
    this.isMobMenuOpen.update(status => !status)
  }

  protected toggleTheme(): void {
    this.themeService.toggle()
  }

  protected changeLanguage(): void {
    this.languageService.changeLanguage()
  }
}
