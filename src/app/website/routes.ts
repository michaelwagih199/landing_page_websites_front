import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WebsiteLayoutComponent } from './layout/website-layout/website-layout.component';

export const WEBSITE_ROUTES: Route[] = [
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
          import('./pages/home/home.component').then(
            (mod) => mod.HomeComponent
          ),
      },
    ],
  },

];
