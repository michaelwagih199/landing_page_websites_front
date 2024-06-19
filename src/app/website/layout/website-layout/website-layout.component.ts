import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaveNew } from './components/app-nav.component';
import { FooterComponent } from './components/footer.component';
import { WidgetSocialIcon } from "./components/widget-social-icon.component";

@Component({
    selector: 'app-website-layout',
    standalone: true,
    template: `
   <responsive-nav></responsive-nav>
   <widget-social-icon></widget-social-icon>
   <footer-component></footer-component>
  `,
    styleUrls: ['../_layout.scss'],
    imports: [
        CommonModule,
        FooterComponent,
        NaveNew,
        WidgetSocialIcon
    ]
})
export class WebsiteLayoutComponent {}
