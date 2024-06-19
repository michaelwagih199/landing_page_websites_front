import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponents } from "./btn-base.component";

@Component({
  selector: 'widget-contact-us-message',
  standalone: true,
  template: `
<section class="relative h-[31.75rem] flex items-center justify-center mt-24">
  <img class="absolute object-cover h-full w-full" [src]="widgetImage" alt="" loading="lazy">
  <div class="absolute object-cover h-full bg-cover w-full  bg-gradient-to-r from-blue_primary-dark_1 opacity-50"></div>
  <div class="absolute flex flex-col  gap-4 w-[17.54844rem] h-auto bg-natural-customGrayLight bg-opacity-30 rounded-lg px-10 py-6 text-blue_primary-dark_1 md:w-1/2">
    <p class="text-center text-2xl font-medium mb-8">Contact us</p>
    <div class="flex flex-col gap-4 md:flex-row md:gap-8">
      <input type="text" autocomplete="off" class="bg-white  text-blue_primary-dark_1 text-sm font-medium border border-natural-white rounded-lg focus:ring-blue-100 focus:border-blue_primary-dark_1 block w-full p-2.5 placeholder-blue_primary-dark_1 bg-opacity-90" placeholder="Your name" required>
      <input type="text" autocomplete="off" class="bg-white  text-blue_primary-dark_1 text-sm font-medium rounded-lg  border border-natural-white  focus:ring-blue-100 focus:border-blue_primary-dark_1 block w-full p-2.5 placeholder-blue_primary-dark_1  bg-opacity-90" placeholder="Your Email" required>
    </div>
    <input type="text" autocomplete="off" class="bg-white  text-blue_primary-dark_1 text-sm font-medium rounded-lg border border-natural-white  focus:ring-blue-100 focus:border-blue_primary-dark_1 block w-full p-2.5 placeholder-blue_primary-dark_1 bg-opacity-90" placeholder="Subject" required>
    <input type="text" autocomplete="off" class="bg-white h-[4.21694rem] text-blue_primary-dark_1 text-sm font-medium  border border-natural-white rounded-lg focus:ring-blue-100 focus:border-blue_primary-dark_1 block w-full p-2.5 placeholder-blue_primary-dark_1 bg-opacity-90" placeholder="Your Message" required>
    <app-button class="text-center" (btnClick)="btnClick.emit()" btnTitle="Send"></app-button>
  </div>
</section>
  `,
  styleUrls: ['./widget-style.scss'],
  imports: [CommonModule, ButtonComponents]
})
export class WidgetContactUsMessage {
  @Input() widgetImage: any = '/assets/images/contact-us-bg.jpeg';
  @Input() widgetImageClass: any = ``;
  @Output()
  btnClick = new EventEmitter();
}
