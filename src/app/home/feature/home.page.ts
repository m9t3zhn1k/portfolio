import { animate, query, stagger, style, transition, trigger } from '@angular/animations'
import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { Technology, TechnologyItem, User, technologies, user } from '@app/shared'
import { TranslocoDirective } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslocoDirective, TechnologyItem],
  animations: [
    trigger('fadeInLeft', [
      transition(':enter', [
        query(':enter', [
          style({ transform: 'translateX(-5rem)', opacity: 0, filter: 'blur(var(--app-blur-sm))' }),
          stagger('25ms', [
            animate(
              '250ms cubic-bezier(0.4, 0, 0.2, 1)',
              style({ transform: 'translateX(0)', opacity: 1, filter: 'blur(0)' }),
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class HomePage {
  protected readonly user = signal<User>(user)

  protected findTechnology(id: Technology['id']): Technology | undefined {
    return technologies.find(technology => technology.id === id)
  }
}
