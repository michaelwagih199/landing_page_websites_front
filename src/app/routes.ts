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
      {
        path: 'about-us',
        loadComponent: () =>
          import('./website/pages/aboutus/about-us-screen.component').then(
            (mod) => mod.AboutUsScreenComponents
          ),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./website/pages/contactusscreen/contact-us-screen.component').then(
            (mod) => mod.ContactUsScreenComponent
          ),
      },
      {
        path: 'service-home',
        loadComponent: () =>
          import('./website/pages/service-pages/service-page.component').then(
            (mod) => mod.ServicePageComponent
          ),
      },
    ],
  },

];
