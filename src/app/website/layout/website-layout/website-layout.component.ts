import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaveNew } from '../../pages/home/nav-new';
import { FooterComponent } from '../../pages/home/sections/footer.component';
import { NavbarComponent } from '../../widgets/navbar.component';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  template: `
   <responsive-nav></responsive-nav>
   <footer-component></footer-component>
  `,
  styleUrls: ['../_layout.scss'],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    NaveNew,
  ],
})
export class WebsiteLayoutComponent {}
