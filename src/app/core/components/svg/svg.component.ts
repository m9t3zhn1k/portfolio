import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent {
  protected readonly src = signal<string | null>(null)

  protected readonly computedSrc = computed(() => `${this.src()}#icon`)

  @Input({ alias: 'src', required: true })
  public set srcSetter(value: string) {
    this.src.set(value)
  }
}
