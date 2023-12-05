import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-important-links-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col flex-1 gap-3 ">
      <h2 class=" text-xl font-semibold app-underline app-underline__footer">
      Important Links
      </h2>
      <a
        href="#"
        class="text-base hover:fill-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 ease-in-out"
        >Home</a
      >
      <a
        href="#"
        class="text-base hover:fill-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 ease-in-out"
        >About</a
      >
      <a
        href="#"
        class="text-base hover:fill-blue_primary-dark_2 active:text-blue_primary-dark_1 transition-colors duration-200 ease-in-out"
        >Services</a
      >
      <a
        href="#"
        class="text-base hover:fill-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 ease-in-out"
        >Contact</a
      >
    </div>
  `,
   styleUrls: ['../_home-style.scss'],
})
export class FooterImportantLinksWidget {}
