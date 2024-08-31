import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShadowEffectWidget } from "./image-effect.component";

@Component({
  selector: 'component-service-card',
  standalone: true,
  template: `
   <div class="h-[20rem] w-[17.813rem]">
  <image_shadow_effect_widget imageSrc="{{ cardCover }}"
    imageClass="relative group h-[20rem] w-[17.813rem]" class="transition duration-300 ease-in-out rounded-lg">
  </image_shadow_effect_widget>
  <div class="text-darkGrey flex flex-col gap-2 mt-2">
    <p class="font-medium text-2xl ">{{ cardTitle }}</p>
    <p>{{ cardDesc }}</p>
    <div class="flex gap-2  items-center">
      <span (click)="btnClick.emit()" class="text-xl cursor-pointer font-medium text-transparent bg-clip-text bg-gradient-to-r from-btnGradient-orange1 to-btnGradient-orange2 hover:from-btnGradient-orangeHover1 hover:to-btnGradient-orangeHover2"
        >Explore
      </span>
      <span class="cursor-pointer" (click)="btnClick.emit()">
      <img src = "/assets/images/icons/arrow-right.svg" alt="arrow-right"/>
      </span>
    </div>
  </div>
</div>
  `,
  styleUrls: ['_styles.scss'],
  imports: [CommonModule, ImageShadowEffectWidget]
})
export class ComponentServiceCard {
  @Input({ required: true }) cardTitle: string = '';
  @Input({ required: true }) cardDesc: string = '';
  @Input({ required: true }) cardCover: string = '';
  @Output() btnClick = new EventEmitter();
}
