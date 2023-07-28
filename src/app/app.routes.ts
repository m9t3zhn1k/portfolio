import { Routes } from '@angular/router'
import { ShellPage } from '@app/shell'

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ShellPage,
    children: [
      {
        path: '',
        loadComponent: () => import('./home').then(m => m.HomePage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
]
