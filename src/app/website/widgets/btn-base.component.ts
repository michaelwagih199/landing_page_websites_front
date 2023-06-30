import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="bg-white text-lg hover:bg-blue_primary-dark_2 hover:text-white active:bg-blue_primary-dark_1  text-natural-black font-semibold py-2 px-6 rounded-full transition-colors duration-200"
    >
      {{btnTitle}}
    </button>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class ButtonComponents {
  btnTitle = 'Order Now';
}
