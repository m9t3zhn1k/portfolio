import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
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

  onClick(): void {
    const current = this.translocoService.getActiveLang()
    this.translocoService.setActiveLang(current === 'en' ? 'ru' : 'en')
  }
}
