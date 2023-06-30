import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="bg-primary_blue-light ">
      <nav class="flex items-center justify-between mx-auto max-w-screen-lg">
        <div>
          <a href="/" class="w-8 h-8">
            <img src="/assets/images/logo.png" alt="Enlight" />
          </a>
        </div>
        <div class="flex items-center gap-2">
          <div class="text-white">
            <a href="#" class="px-4">Home</a>
            <a href="#" class="px-4">About Us</a>
            <a href="#" class="px-4">Services</a>
            <a href="#" class="px-4">Contact</a>
          </div>
          <a href="#" class="button ">Order Now</a>
        </div>
      </nav>
    </header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class NavbarComponent {}
