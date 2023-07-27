import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../widgets/navbar.component";
import { FooterComponent } from "../../pages/home/sections/footer.component";
import { NaveNew } from "../../pages/home/nav-new";

@Component({
    selector: 'app-website-layout',
    standalone: true,
    template: `
   <responsive-nav></responsive-nav>
   <!-- <footer-component></footer-component>  -->
  `,
    styles: [],
    imports: [CommonModule, NavbarComponent, FooterComponent, NaveNew]
})
export class WebsiteLayoutComponent {

}
