import { Routes } from '@angular/router'
import { ShellPage } from '@app/shell'

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: ShellPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('@app/home').then(m => m.HomePage),
      },
      {
        path: 'about',
        loadComponent: () => import('@app/about').then(m => m.AboutPage),
      },
      {
        path: 'projects',
        loadComponent: () => import('@app/projects').then(m => m.ProjectsPage),
      },
      {
        path: 'contacts',
        loadComponent: () => import('@app/contacts').then(m => m.ContactsPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
]
