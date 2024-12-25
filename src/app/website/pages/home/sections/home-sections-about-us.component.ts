import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AboutUsModel } from 'src/app/website/models/home-model';

@Component({
  selector: 'home-sections-about-us',
  template: `
    <section class="h-about-us-sec bg-paleGray">
      <div class="container h-full">
        <div class="flex justify-between items-center gap-32 h-full">
          <div class="flex flex-col gap-8 w-3/5 ">
            <h1 class="font-title text-[2.5rem]/[53.32px] font-bold text-dark">{{aboutUsData.header}}</h1>
            <h1 class="font-medium text-darkGrey text-base">{{aboutUsData.desc}}</h1>
          </div>
          <div class="w-2/5 flex justify-end">

            <img class="object-contain w-96 h-96 "[ngSrc]="aboutUsData.image" width="384" height="384" alt="">
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
