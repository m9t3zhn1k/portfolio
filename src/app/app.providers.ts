import { provideHttpClient } from '@angular/common/http'
import { EnvironmentProviders, Provider, isDevMode } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { provideTransloco } from '@ngneat/transloco'
import { APP_ROUTES } from './app.routes'
import { TranslocoHttpLoader } from './transloco-loader'

export const APP_PROVIDERS: (EnvironmentProviders | Provider)[] = [
  provideHttpClient(),
  provideAnimations(),
  provideRouter(APP_ROUTES),
  provideTransloco({
    config: {
      availableLangs: ['en', 'ru'],
      defaultLang: 'en',
      reRenderOnLangChange: true,
      prodMode: !isDevMode(),
    },
    loader: TranslocoHttpLoader,
  }),
]
