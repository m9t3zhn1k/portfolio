import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core'
import { Project } from '@app/projects/models'
import { Technology, technologies } from '@app/shared'

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  host: {
    '[attr.data-reversed]': 'isReversed()',
  },
})
export class ProjectComponent {
  public readonly project = signal<Project | null>(null)
  public readonly isReversed = signal<boolean>(false)

  @Input({ alias: 'project', required: true })
  public set projectSetter(value: Project) {
    this.project.set(value)
  }

  @Input({ alias: 'reversed', required: true })
  public set resersedSetter(value: boolean) {
    this.isReversed.set(value)
  }

  public findTechnology(id: Technology['id']): Technology | undefined {
    return technologies.find(technology => technology.id === id)
  }
}
