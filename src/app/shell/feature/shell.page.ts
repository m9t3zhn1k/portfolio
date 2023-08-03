import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterComponent } from '@app/shell/widgets/footer/footer.component'
import { HeaderComponent } from '@app/shell/widgets/header/header.component'

@Component({
  standalone: true,
  selector: 'app-shell-page',
  templateUrl: './shell.page.html',
  styleUrls: ['./shell.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class ShellPage {}
