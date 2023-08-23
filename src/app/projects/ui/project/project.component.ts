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
import { TranslocoDirective } from '@ngneat/transloco'

@Component({
  standalone: true,
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TranslocoDirective, TechnologyItem],
  host: {
    '[attr.data-reversed]': 'isReversed()',
    '[attr.data-visible]': 'isVisible()',
  },
})
export class ProjectComponent implements OnInit {
  private readonly elementRef = inject(ElementRef)

  protected readonly project = signal<Project | null>(null)
  protected readonly isReversed = signal<boolean>(false)
  protected readonly isImageLoaded = signal<boolean>(false)
  protected readonly isVisible = signal<boolean>(false)

  private readonly intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.isVisible.set(true)
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

  protected findTechnology(id: Technology['id']): Technology | undefined {
    return technologies.find(technology => technology.id === id)
  }

  protected setLoaded(): void {
    this.isImageLoaded.set(true)
  }
}
