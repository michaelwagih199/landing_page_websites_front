import { Component, Input, OnInit } from '@angular/core';
import { Makespecialevents } from 'src/app/website/models/home-model';
import { ButtonComponents } from "../../../widgets/btn-base.component";

@Component({
  selector: 'home-make-special-events',
  template: `
      <section class="h-about-us-sec bg-veryLightPink">
          <div class="container h-full">
            <div class="flex justify-between items-center gap-32 h-full">
              <div class="flex flex-col gap-8 w-3/5 ">
                <h1 class="font-title text-[2.5rem]/[53.32px] font-bold text-dark">{{makeSpecialEvents.header}}</h1>
                <h1 class="font-medium text-darkGrey text-base">{{makeSpecialEvents.desc}}</h1>
                <app-button class="mt-3" (btnClick)="onEventsClick()" btnTitle="Learn More"></app-button>
              </div>
              <div class="w-2/5 flex justify-end">
                <img class="object-contain w-96 h-96 transition duration-300 ease-in-out hover:scale-105" [src]="makeSpecialEvents.image" loading="lazy" alt="">
              </div>
            </div>
          </div>
      </section>
    `,
  standalone: true,
  imports: [ButtonComponents]
})

export class HomeMakeSpecialEventsComponent {
  @Input({ required: true })
  makeSpecialEvents!: Makespecialevents;
  onEventsClick() {

  }
}
