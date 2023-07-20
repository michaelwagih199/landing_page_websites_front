import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShadowEffectWidget } from './image-effect.component';

@Component({
  selector: 'component-service-card',
  standalone: true,
  imports: [CommonModule,ImageShadowEffectWidget],
  template: `
    <div class="">
      <image_shadow_effect_widget
        [imageSrc]="cardCover"
        [hoverTitle]="cardTitle"
        hoverTitleStyle="text-gray-50 text-base"
        imageClass="relative group h-[16.394rem] w-[17.875rem]"
        class="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
      ></image_shadow_effect_widget>
      <!-- <img
        class=" w-60 h-60 object-cover rounded-md"
        [src]="cardCover"
        alt="Card Service"
      /> -->
      <p class="text-blue_primary-dark_1 text-center py-2">{{ cardTitle }}</p>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class ComponentServiceCard {
  @Input() cardTitle: string = 'Lashes Accessories';
  @Input() cardCover: string = '';
  @Output() btnClick = new EventEmitter();
}
