import { AfterViewInit, ChangeDetectionStrategy, Component, signal } from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage implements AfterViewInit {
  protected readonly loaded = signal<boolean>(false)

  public ngAfterViewInit(): void {
    setTimeout(() => this.loaded.set(true), 0)
  }
}
