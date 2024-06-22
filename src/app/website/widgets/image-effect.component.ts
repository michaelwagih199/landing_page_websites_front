import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'image_shadow_effect_widget',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
<div [class]="imageClass">
  <img [src]="imageSrc" alt="" loading="lazy" class="rounded-lg object-cover w-full h-full" />
  <div
    class="flex justify-center rounded-lg cursor-pointer items-center opacity-0 bg-gradient-to-r from-slate-500 to-slate-800 to-opacity-30 group-hover:opacity-30 absolute top-0 left-0 h-full w-full transition duration-300 ease-in-out">
  </div>
</div>
  `,
})
export class ImageShadowEffectWidget {
  @Input() imageClass: string = ``;
  @Input({ required: true }) imageSrc: any;

}
