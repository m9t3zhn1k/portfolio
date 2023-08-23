import { ChangeDetectionStrategy, Component } from '@angular/core'
import { TranslocoDirective } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoDirective],
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear()
}
