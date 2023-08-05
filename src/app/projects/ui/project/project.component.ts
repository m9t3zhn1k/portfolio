import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core'
import { Project } from '@app/projects/models'

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ProjectComponent {
  public readonly project = signal<Project | null>(null)

  public readonly technologies = computed(() => this.project()?.technoligies.join(', '))

  @Input({ alias: 'project', required: true })
  public set projectSetter(value: Project) {
    this.project.set(value)
  }
}
