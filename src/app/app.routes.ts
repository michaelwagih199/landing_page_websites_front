import { Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './website/layout/website-layout/website-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    providers: [
      // AdminService,
      // {provide: ADMIN_API_KEY, useValue: 12345},
    ],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./website/pages/home/home.component').then(
            (mod) => mod.HomeComponent
          ),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('./website/pages/aboutus/about-us-screen.component').then(
            (mod) => mod.AppScreenAboutUs
          ),
      },
      {
        path: 'catering',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./website/pages/catering/catring-screen.component').then(
                (mod) => mod.AppScreenCatering
              ),
          },
          {
            path: 'menu',
            loadComponent: () =>
              import('./website/pages/catering/menus/menue-screen.component').then(
                (mod) => mod.MenuComponent
              ),
          }
        ],
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./website/pages/events/events.component').then(
                (mod) => mod.AppScreenEvents
              ),
          },
          {
            path: 'details',
            loadComponent: () =>
              import('./website/pages/events/events-details/events-details.component').then(
                (mod) => mod.EventsDetailsComponents
              ),
          }
        ]
      },
    ],
  },

];
