import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core'
import { Technology } from '@app/shared/models'

@Component({
  standalone: true,
  selector: 'app-technology-item',
  templateUrl: './technology-item.component.html',
  styleUrls: ['./technology-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class TechnologyItem {
  public readonly data = signal<Technology | null>(null)

  @Input({ alias: 'technology', required: true })
  public set dataSetter(value: Technology) {
    this.data.set(value)
  }
}
