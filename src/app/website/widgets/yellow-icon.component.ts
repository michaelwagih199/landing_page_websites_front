import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'widget-yellow-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="flex flex-col gap-2 justify-center items-center">
      <div class="flex rounded-full items-center w-16 h-16 bg-blue_primary-light bg-opacity-[0.2] p-3 m-auto">
        <img [src]="iconSrc" alt="Icon" />
      </div>
      <p class="text-blue_primary-dark_1 text-2xl mt-4">{{iconTitle}}</p>
      <p class="text-blue_primary-dark_1 text-center text-xl w-36">{{iconDesc}}</p>
    </section>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class WidgetYellowIcon {
  @Input() iconSrc: string = '';
  @Input() iconTitle: string = 'Affordable Price';
  @Input() iconDesc: string = 'Best service value for money and Accepting all cards.';

}
