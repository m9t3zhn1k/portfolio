import { bootstrapApplication } from '@angular/platform-browser'
import { APP_PROVIDERS } from './app/app.providers'

import { AppComponent } from './app/app.component'

bootstrapApplication(AppComponent, { providers: APP_PROVIDERS }).catch(err => console.error(err))
