import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-view-base',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-around">
      <p class="text-natural-customGray text-base">View all</p>
      <svg
          class="rotate-180 ml-8"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path class="hover:stroke-blue_primary-dark_4 cursor-pointer transition-colors duration-200"
            d="M7 13L1 7L7 1"
            stroke="#E29E21"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class ButtonComponents {
  @Input() btnTitle: string = 'Order Now';
  @Input() btnStyle: string = '';
  @Output() btnClick = new EventEmitter();
}
