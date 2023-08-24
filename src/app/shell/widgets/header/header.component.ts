import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LocalStorageKey, LocalStorageService } from '@app/core'
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, TranslocoDirective],
})
export class HeaderComponent {
  private readonly translocoService = inject(TranslocoService)
  private readonly localStorageService = inject(LocalStorageService)

  protected readonly currentLanguage = signal<string>(this.translocoService.getActiveLang())

  protected changeLanguage(): void {
    this.translocoService.setActiveLang(this.currentLanguage() === 'en' ? 'ru' : 'en')

    const language = this.translocoService.getActiveLang()

    this.currentLanguage.set(language)
    this.localStorageService.setItem(LocalStorageKey.Language, language)
  }
}
