import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShadowEffectWidget } from "./image-effect.component";

@Component({
  selector: 'component-service-card',
  standalone: true,
  template: `
   <div class="flex flex-col relative group h-[20rem] w-[17.813rem]">
  <image_shadow_effect_widget imageSrc="{{ cardCover }}"
    imageClass="relative group h-[20rem] w-[17.813rem]" class="transition duration-300 ease-in-out rounded-lg">
  </image_shadow_effect_widget>
  <div class="text-darkGrey flex flex-col gap-2 mt-2">
    <p class="font-medium text-2xl ">{{ cardTitle }}</p>
    <p>{{ cardDesc }}</p>
    <div class="flex gap-2  items-center">
      <a class="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-btnGradient-orange1 to-btnGradient-orange2 hover:from-btnGradient-orangeHover1 hover:to-btnGradient-orangeHover2"
        href="#">Explore
      </a>
      <span class="cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.43 18.82C14.24 18.82 14.05 18.75 13.9 18.6C13.61 18.31 13.61 17.83 13.9 17.54L19.44 12L13.9 6.46C13.61 6.17 13.61 5.69 13.9 5.4C14.19 5.11 14.67 5.11 14.96 5.4L21.03 11.47C21.32 11.76 21.32 12.24 21.03 12.53L14.96 18.6C14.81 18.75 14.62 18.82 14.43 18.82Z"
            fill="url(#paint0_linear_2393_117)" />
          <path
            d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
            fill="url(#paint1_linear_2393_117)" />
          <defs>
            <linearGradient id="paint0_linear_2393_117" x1="21.2475" y1="5.1825" x2="12.6065" y2="5.90224"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA751A" />
              <stop offset="1" stop-color="#DD5B07" />
            </linearGradient>
            <linearGradient id="paint1_linear_2393_117" x1="21.08" y1="11.25" x2="16.2522" y2="20.1085"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FA751A" />
              <stop offset="1" stop-color="#DD5B07" />
            </linearGradient>
          </defs>
        </svg>
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
