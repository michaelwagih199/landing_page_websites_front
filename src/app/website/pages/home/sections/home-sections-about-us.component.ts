import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AboutUsModel } from 'src/app/website/models/home-model';

@Component({
  selector: 'home-sections-about-us',
  template: `
    <section class="h-about-us-sec bg-paleGray">
      <div class="container sm:pt-14 pt-0">
        <div class="  flex flex-col	 sm:flex-row	 justify-between items-center sm:gap-32 gap-3 h-full">
          <div class="flex flex-col sm:gap-8 gap-3 sm:w-3/5 w-full sm:order-1 order-2 text-center sm:text-left	 ">
            <h1 class="font-title sm:text-[2.5rem]/[53.32px] text-xl font-bold text-dark">{{aboutUsData.header}}</h1>
            <h1 class="font-medium text-darkGrey sm:text-base text-sm">{{aboutUsData.desc}}</h1>
          </div>
          <div class="sm:w-2/5 w-4/5 flex justify-end order-1 sm:order-2">
            <img class="object-contain  "[ngSrc]="aboutUsData.image" width="352" height="352" alt="">
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true,
    imports: [NgOptimizedImage,]
})

export class HomeSectionsAboutUsComponent {
  @Input({ required: true })
  aboutUsData!: AboutUsModel;
}
