import { Component, Input, OnInit } from '@angular/core';
import { Makespecialevents } from 'src/app/website/models/home-model';
import { ButtonComponents } from "../../../widgets/btn-base.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'home-make-special-events',
  template: `
      <section class=" bg-veryLightPink sm:pb-16 sm:bt-16 pt-8 pb-16 h-auto">
          <div class="container ">
            <div class="flex flex-col	 sm:flex-row justify-between items-center sm:gap-32 gap-3">
              <div class="flex flex-col sm:gap-8 gap-3 sm:w-3/5 w-full sm:order-1 order-2 text-center sm:text-left	 ">
                <h1 class="font-title sm:text-[2.5rem]/[53.32px] text-xl font-bold text-dark">{{makeSpecialEvents.header}}</h1>
                <h1 class="font-medium text-darkGrey sm:text-base text-sm">{{makeSpecialEvents.desc}}</h1>
                <app-button class="mt-3" (btnClick)="onEventsClick()" btnTitle="Learn More"></app-button>
              </div>
              <div class="sm:w-2/5 w-4/5 flex justify-end order-1 sm:order-2">
                <img class="object-contain " [ngSrc]="makeSpecialEvents.image" width="352" height="352" alt="">
              </div>
            </div>
          </div>
      </section>
    `,
  standalone: true,
  imports: [ButtonComponents,NgOptimizedImage]
})

export class HomeMakeSpecialEventsComponent {
  @Input({ required: true })
  makeSpecialEvents!: Makespecialevents;
  onEventsClick() {

  }
}
