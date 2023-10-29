import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-base-circular-image',
  standalone: true,
  imports: [CommonModule],
  template: `
<section>
<div *ngIf="widgetIsFourCircles"
      class="relative flex justify-center items-center w-[16.6875rem] h-[16.6875rem] rounded-full border border-blue_primary-dark_1 border-opacity-10"
    >
      <div
        class="absolute w-[15.975rem] h-[15.975rem] border border-blue_primary-dark_1 rounded-full border-opacity-50"
      ></div>
      <div
        class="absolute w-[14.4rem] h-[14.4rem] border border-blue_primary-dark_1 rounded-full"
      ></div>
      <img
      class="absolute w-[13.0125rem] h-[13.0125rem] rounded-full object-cover"
      [src]="widgetImage"
      alt=""
      loading="lazy"
      />
    </div>

</section>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class WidgetBaseCircularImage {
  @Input({ required: true }) widgetImage: string = '';
  @Input() widgetIsFourCircles: boolean = true;
  @Input({ required: true }) widgetImageClass: string = ``;
}
