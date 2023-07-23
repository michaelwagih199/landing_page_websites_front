import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../widgets/navbar.component";
import { FooterComponent } from "../../pages/home/sections/footer.component";

@Component({
    selector: 'app-website-layout',
    standalone: true,
    template: `
   <app-navbar></app-navbar>
   <footer-component></footer-component>
  `,
    styles: [],
    imports: [CommonModule, NavbarComponent, FooterComponent]
})
export class WebsiteLayoutComponent {

}
