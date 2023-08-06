import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { Technology, TechnologyItem, User, technologies, user } from '@app/shared'

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TechnologyItem],
})
export class HomePage {
  public readonly user = signal<User>(user)

  public findTechnology(id: Technology['id']): Technology | undefined {
    return technologies.find(technology => technology.id === id)
  }
}
