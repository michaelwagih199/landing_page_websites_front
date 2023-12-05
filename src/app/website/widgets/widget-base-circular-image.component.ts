import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-base-circular-image',
  standalone: true,
  imports: [CommonModule],
  template: `
<section>
  <div
    class="relative flex justify-center items-center w-[16.6875rem] h-[16.6875rem] rounded-full border border-blue_primary-dark_1 border-opacity-10 md:h-[27.8125rem] md:w-[27.8125rem] ">
    <div class="absolute w-[15.975rem] h-[15.975rem] border border-blue_primary-dark_1 rounded-full border-opacity-50 md:h-[26.625rem] md:w-[26.625rem]">
    </div>
    <div class="absolute w-[14.4rem] h-[14.4rem] border border-blue_primary-dark_1 rounded-full md:h-[24.6875rem] md:w-[24.6875rem]"></div>
    <img class="absolute w-[13.0125rem] h-[13.0125rem] rounded-full object-cover md:h-[21.6875rem] md:w-[21.6875rem] " [src]="widgetImage" alt=""
      loading="lazy" />
      <div class="absolute w-[13.0125rem] h-[13.0125rem] md:h-[21.6875rem] md:w-[21.6875rem] bg-blue_primary-dark_1 opacity-20 rounded-full" ></div>
      <div
      class="absolute w-[13.0125rem] h-[13.0125rem] md:h-[21.6875rem] md:w-[21.6875rem]  bg-gradient-to-r rounded-full from-[#4679B7] via-[#7F6ABB] to-[#00BDD0] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40 "></div>
  </div>
</section>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class WidgetBaseCircularImage {
  @Input({ required: true }) widgetImage: any = '';
  @Input({ required: true }) widgetImageClass: any = ``;
}
