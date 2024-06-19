import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShadowEffectWidget } from './image-effect.component';

@Component({
  selector: 'component-service-card',
  standalone: true,
  imports: [CommonModule,ImageShadowEffectWidget],
  template: `
    <div class="flex flex-col justify-center items-center gap-4">
      <div
        class="relative flex justify-center items-center w-[7.60206rem] h-[7.60206rem] rounded-full border border-blue_primary-dark_1 md:h-[16.375rem] md:w-[16.375rem]"
      >
        <img
          class="absolute w-[6.90569rem] h-[6.90569rem] rounded-full object-cover md:h-[14.875rem] md:w-[14.875rem]"
          [src]="cardCover"
          alt=""
          loading="lazy"
        />
        <div class="absolute w-[6.90569rem] h-[6.90569rem] md:h-[14.875rem] md:w-[14.875rem] bg-blue_primary-dark_1 opacity-20 rounded-full" ></div>
      <div
      class="absolute w-[6.90569rem] h-[6.90569rem] md:h-[14.875rem] md:w-[14.875rem]  bg-gradient-to-r rounded-full from-[#4679B7] via-[#7F6ABB] to-[#00BDD0] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40 "></div>
      </div>
      <p class="text-blue_primary-dark_1 text-center py-2 text-2xl font-normal ">{{ cardTitle }}</p>
      <div class="flex flex-col" >
        <p class="text-blue_primary-dark_1 text-center py-2 text-xl font-normal ">{{ cardDesc }}</p>
        <a class="text-blue_primary-hover text-center py-2 text-xl font-normal hover:text-blue_primary-dark_1 transition-colors duration-200 ease-in-out" href="#">See more</a>
      </div>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class ComponentServiceCard {
  @Input() cardTitle: string = 'Lashes Accessories';
  @Input() cardDesc: string = 'Lorem ipsum dolor sit amet, consectetur ';
  @Input() cardCover: string = '';
  @Output() btnClick = new EventEmitter();
}
