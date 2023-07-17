import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'widget-customer-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="flex flex-col p-3 gap-2 h-auto w-80 border-2 rounded-2xl justify-center items-center"
    >
      <img
        class="w-10 h-10 rounded-full"
        [src]="widgetAvatar"
        alt="Order Now"
      />
      <p class="text-blue_primary-dark_4 text-xl">{{ widgetTitle }}</p>
      <p class="text-natural-customGray text-base text-center">
        {{ widgetDesc }}
      </p>
      <div class="flex gap-4">
        <div *ngFor="let _ of [].constructor(widgetScore)">
          <img src="/assets/images/icons/star.svg" alt="">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class CustomerCardWidget {
  @Input() widgetTitle: string = 'Rania Salman';
  @Input() widgetDesc: string =
    'Very nice, polite and professional staff and drs. Changed my mood and Excellent center, Thank you all so much.';
  @Input() widgetAvatar: string = '/assets/images/unsplash2.jpg';
  @Input() widgetScore = 5;
}
