import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-quick-links-widget',
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
        >NeoDerma Stem</a
      >
      <a
        href="#"
        class="text-base hover:text-accent active:text-blue_primary-dark_1 transition-colors duration-200 "
        >PsychoCoffee Psychiatry</a
      >
      <a
        href="#"
        class="text-base hover:text-accent active:text-blue_primary-dark_1 transition-colors duration-200 "
        >Candela Laser</a
      >
      <a
        href="#"
        class="text-base hover:text-accent active:text-blue_primary-dark_1 transition-colors duration-200 "
        >Double Coffee Smoothie</a
      >
    </div>
  `,
   styleUrls: ['../_home-style.scss'],
})
export class FooterQuickLinksWidget {}
