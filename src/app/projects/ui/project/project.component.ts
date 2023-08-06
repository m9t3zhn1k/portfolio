import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core'
import { Project } from '@app/projects/models'
import { Technology, TechnologyItem, technologies } from '@app/shared'

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TechnologyItem],
  host: {
    '[attr.data-reversed]': 'isReversed()',
    '[attr.data-visible]': 'isVisible()',
  },
})
export class ProjectComponent implements OnInit {
  public readonly elementRef = inject(ElementRef)

  public readonly project = signal<Project | null>(null)
  public readonly isReversed = signal<boolean>(false)
  public readonly isImageLoaded = signal<boolean>(false)
  public readonly isVisible = signal<boolean>(false)

  public readonly intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isVisible.set(true)
      } else {
        this.isVisible.set(false)
      }
    })
  })

  @Input({ alias: 'project', required: true })
  public set projectSetter(value: Project) {
    this.project.set(value)
  }

  @Input({ alias: 'reversed', required: true })
  public set resersedSetter(value: boolean) {
    this.isReversed.set(value)
  }

  public ngOnInit(): void {
    this.intersectionObserver.observe(this.elementRef.nativeElement)
  }

  public findTechnology(id: Technology['id']): Technology | undefined {
    return technologies.find(technology => technology.id === id)
  }

  public setLoaded(): void {
    this.isImageLoaded.set(true)
  }
}
