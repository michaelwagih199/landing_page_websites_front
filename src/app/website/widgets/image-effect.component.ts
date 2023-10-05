import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'image_shadow_effect_widget',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div [class]="imageClass">
      <img
      [src]="imageSrc"
        alt=""
        loading="lazy"
        class="rounded-lg object-cover w-full h-full"
      />
      <div
        class="flex justify-center rounded-lg cursor-pointer  items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full transition duration-300 ease-in-out"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full cursor-pointer rounded-lg flex justify-center items-center opacity-0 hover:opacity-100"
      >
        <div class="flex-row text-center cursor-pointer">
          <h1 [class]="hoverTitleStyle">{{ hoverTitle }}</h1>
        </div>
      </div>
    </div>
  `,
})
export class ImageShadowEffectWidget {
  @Input() imageClass: string = `relative group h-[29rem] w-[32rem]`;
  @Input() hoverTitle: any;
  @Input() hoverTitleStyle: string = 'text-gray-50 font-bold text-xl';
  @Input({ required: true }) imageSrc: any;

}
