import { EnvironmentProviders } from '@angular/core'
import { provideRouter } from '@angular/router'
import { APP_ROUTES } from './app.routes'

export const APP_PROVIDERS: EnvironmentProviders[] = [provideRouter(APP_ROUTES)]
