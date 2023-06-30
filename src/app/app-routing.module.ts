import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './website/layout/website-layout/website-layout.component';

const routes: Routes = [
  //
  {path: '', loadChildren: () => import('./website/routes').then(mod => mod.WEBSITE_ROUTES)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
