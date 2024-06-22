import { Component, Input, OnInit } from '@angular/core';
import { WhyChooseUs } from 'src/app/website/models/home-model';

@Component({
  selector: 'home-sections-why-choose-us',
  template: `
    <section class="h-about-us-sec bg-paleGray">
      <div class="container h-full">

      <div class="flex justify-between items-center gap-32 h-full">

          <div class="w-2/5 flex justify-start">
            <img class="object-contain w-96 h-96 transition duration-300 ease-in-out hover:scale-105" [src]="whyChooseUs.image" loading="lazy" alt="">
          </div>

          <div class="flex flex-col gap-8 w-3/5 ">
            <h1 class="font-title text-[2.5rem]/[53.32px] font-bold text-dark">{{whyChooseUs.header}}</h1>
            <h1 class="font-medium text-darkGrey text-base">{{whyChooseUs.desc}}</h1>
          </div>
      </div>
      </div>
    </section>
  `,
  standalone: true
})

export class HomeSectionsWhyChooseUsComponent  {
  @Input({ required: true })
  whyChooseUs!: WhyChooseUs;
}
