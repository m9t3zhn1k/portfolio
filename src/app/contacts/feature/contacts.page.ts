import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  standalone: true,
  selector: 'app-contacts-page',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsPage {}
