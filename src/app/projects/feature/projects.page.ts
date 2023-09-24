import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { projects } from '@app/projects/data'
import { Project } from '@app/projects/models'
import { ProjectComponent } from '@app/projects/ui'
import { TranslocoDirective } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-projects-page',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslocoDirective, ProjectComponent],
})
export class ProjectsPage {
  protected readonly projects = signal<Project[]>(projects)
}
