import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LocalStorageKey, LocalStorageService } from '@app/core'
import { TranslocoService } from '@ngneat/transloco'

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [':host { display: flex; flex-direction: column; flex: 1 1 auto; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private readonly translocoService = inject(TranslocoService)
  private readonly localStorageService = inject(LocalStorageService)

  public ngOnInit(): void {
    const language = this.localStorageService.getItem(LocalStorageKey.Language)

    if (language) {
      this.translocoService.setActiveLang(language)
    }
  }
}
