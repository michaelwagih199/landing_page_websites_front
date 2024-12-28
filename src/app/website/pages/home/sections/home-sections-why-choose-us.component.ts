import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { WhyChooseUs } from 'src/app/website/models/home-model';

@Component({
  selector: 'home-sections-why-choose-us',
  template: `
    <section class=" bg-paleGray sm:pb-16 sm:bt-16 pt-8 pb-16 h-auto ">
      <div class="container   ">

      <div class=" flex flex-col	 sm:flex-row justify-between items-center sm:gap-32 gap-3 ">

          <div class="sm:w-2/5 w-4/5 flex justify-start">
            <img class="object-contain  " [ngSrc]="whyChooseUs.image" width="352" height="352" alt="">
          </div>

          <div class="flex flex-col sm:gap-8 gap-3 sm:w-3/5 w-full text-center sm:text-left ">
            <h1 class="font-title sm:text-[2.5rem]/[53.32px] text-xl font-bold text-dark">{{whyChooseUs.header}}</h1>
            <h1 class="font-medium text-darkGrey sm:text-base text-sm">{{whyChooseUs.desc}}</h1>
          </div>
      </div>
      </div>
    </section>
  `,
  standalone: true,
  imports:[NgOptimizedImage]
})

export class HomeSectionsWhyChooseUsComponent  {
  @Input({ required: true })
  whyChooseUs!: WhyChooseUs;
}
