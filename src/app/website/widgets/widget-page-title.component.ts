import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'widget-page-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative h-[13.31525rem] text-white md:h-[20.6015rem]">
      <img class="absolute object-cover h-full bg-cover w-full" [src]="widgetImage" loading="lazy" alt="">
      <div class="absolute object-cover h-full bg-cover w-full  bg-gradient-to-r from-blue_primary-dark_1 opacity-50"></div>
      <img class="absolute bottom-0" [src]="imageFlower" alt="" loading="lazy">
    <div class="absolute bottom-8 left-3 flex flex-col md:left-32">
      <div class=" items-center justify-center">
        <div class="flex flex-col">
        <p class="text-2xl font-normal md:text-4xl">{{widgetTitle}}</p>
          <div class="flex gap-2">
            <p class="cursor-pointer hover:text-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 md:text-lg">Home</p>
            <p class="cursor-pointer md:text-lg">></p>
            <p class="cursor-pointer hover:text-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 md:text-lg">About us</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})

//WidgetPageTitle
export class WidgetPageTitle {
  @Input({ required: true }) widgetImage: any;
  imageFlower = '/assets/images/flowerImage.png'
  @Input({ required: true }) widgetTitle: string | undefined;
}
