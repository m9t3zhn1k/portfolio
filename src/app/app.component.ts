import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styles: [':host { display: flex; flex-direction: column; flex: 1 1 auto; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
