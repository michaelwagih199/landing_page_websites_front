import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-important-links-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col flex-1 gap-3 ">
      <h2 class=" text-xl app-underline app-underline__footer">
        Quick Links
      </h2>
      <a
        href="#"
        class="text-base hover:text-accent active:text-blue_primary-dark_1 transition-colors duration-200 "
        >Home</a
      >
      <a
        href="#"
        class="text-base hover:text-accent active:text-blue_primary-dark_1 transition-colors duration-200 "
        >About</a
      >
      <a
        href="#"
        class="text-base hover:text-accent active:text-blue_primary-dark_1 transition-colors duration-200 "
        >Services</a
      >
      <a
        href="#"
        class="text-base hover:text-accent active:text-blue_primary-dark_1 transition-colors duration-200 "
        >Contact</a
      >
    </div>
  `,
   styleUrls: ['../_home-style.scss'],
})
export class FooterImportantLinksWidget {}
