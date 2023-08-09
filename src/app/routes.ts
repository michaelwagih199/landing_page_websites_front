import { Route } from '@angular/router';
import { HomeComponent } from './website/pages/home/home.component';
import { WebsiteLayoutComponent } from './website/layout/website-layout/website-layout.component';

export const routes: Route[] = [
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
    ],
  },

];
