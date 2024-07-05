import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaveNew } from './components/app-nav.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  template: `
    <div class="layout">
      <responsive-nav></responsive-nav>
      <footer-component ></footer-component>
    </div>
  `,
  styleUrls: ['../_layout.scss'],
  imports: [
    CommonModule,
    FooterComponent,
    NaveNew,
  ]
})
export class WebsiteLayoutComponent { }
