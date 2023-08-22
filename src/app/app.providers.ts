import { EnvironmentProviders, Provider } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { APP_ROUTES } from './app.routes'

export const APP_PROVIDERS: (EnvironmentProviders | Provider)[] = [
  provideAnimations(),
  provideRouter(APP_ROUTES),
]
