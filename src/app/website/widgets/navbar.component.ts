import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponents } from "./btn-base.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `
    <header class="bg-blue_primary-light max-h-20">
      <nav class="flex items-center justify-between mx-auto container">
        <div>
          <a href="/">
            <img class="logo" src="/assets/images/logo.png" alt="Enlight" />
          </a>
        </div>
        <div class="flex items-center gap-2">
          <div class="text-white">
            <a href="#" class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 ">Home</a>
            <a href="#" class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 ">About Us</a>
            <a href="#" class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 ">Services</a>
            <a href="#" class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 ">Contact</a>
          </div>
          <app-button></app-button>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
    styleUrls: ['./widget-style.scss'],
    imports: [CommonModule, RouterModule, ButtonComponents]
})
export class NavbarComponent {}
