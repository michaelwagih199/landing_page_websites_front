import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../widgets/navbar.component";

@Component({
    selector: 'app-website-layout',
    standalone: true,
    template: `
   <app-navbar></app-navbar>
  `,
    styles: [],
    imports: [CommonModule, NavbarComponent]
})
export class WebsiteLayoutComponent {

}
