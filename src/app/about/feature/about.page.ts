import { animate, query, stagger, style, transition, trigger } from '@angular/animations'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { TranslocoDirective } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslocoDirective],
  animations: [
    trigger('flipInY', [
      transition(':enter', [
        query('.benefit', [
          style({ transform: 'rotate3d(0, 1, 0, 180deg)', opacity: 0 }),
          stagger('250ms', [
            animate('400ms', style({ transform: 'rotate3d(0, 1, 0, 0deg)', opacity: 1 })),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class AboutPage {}
