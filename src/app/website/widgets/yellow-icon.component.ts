import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'widget-yellow-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="flex flex-col gap-2 justify-center my-4 ">
      <div class="flex rounded-full w-20 h-20 bg-accent p-3 m-auto">
        <img [src]="iconSrc" alt="Icon" />
      </div>
      <p class="text-blue_primary-dark_4 text-xl">{{iconTitle}}</p>
      <p class="text-natural-customGray text-center text-base w-36">{{iconDesc}}</p>
    </section>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class WidgetYellowIcon {
  @Input() iconSrc: string = '';
  @Input() iconTitle: string = 'Affordable Price';
  @Input() iconDesc: string = 'Best service value for money and Accepting all cards.';

}
