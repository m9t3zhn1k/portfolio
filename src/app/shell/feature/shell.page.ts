import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterComponent, HeaderComponent } from '@app/shell/widgets'

@Component({
  standalone: true,
  selector: 'app-shell-page',
  templateUrl: './shell.page.html',
  styleUrls: ['./shell.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class ShellPage {}
