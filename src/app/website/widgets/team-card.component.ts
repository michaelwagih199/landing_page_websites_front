import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShadowEffectWidget } from "./image-effect.component";

@Component({
  selector: 'component-team-card',
  standalone: true,
  template: `
      <div class="flex flex-col relative group h-[20rem] w-[17.813rem]">
  <image_shadow_effect_widget imageSrc="{{ cardCover }}" imageClass="relative group h-[20rem] w-[17.813rem]"
    class="transition duration-300 ease-in-out rounded-lg">
  </image_shadow_effect_widget>
  <div class="text-darkGrey flex flex-col gap-2 mt-2">
    <p class="font-medium text-2xl ">{{ cardTitle }}</p>
    <p>{{ cardDesc }}</p>
  </div>
</div>
  `,
  styleUrls: ['_styles.scss'],
  imports: [CommonModule, ImageShadowEffectWidget]
})
export class ComponentTeamCard {
  @Input({ required: true }) cardTitle: string = '';
  @Input({ required: true }) cardDesc: string = '';
  @Input({ required: true }) cardCover: string = '';
  @Output() btnClick = new EventEmitter();
}
