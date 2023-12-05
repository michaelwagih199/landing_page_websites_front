import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerComponent } from 'src/app/spinner.component';
import { ButtonComponents } from '../../widgets/btn-base.component';
import { FlowerWidget } from '../../widgets/flower-title.component';
import { WidgetContactUsMessage } from '../../widgets/widget-contact-us-message.component';
import { WidgetPageTitle } from '../../widgets/widget-page-title.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { FooterContactUsWidget } from "../home/homewidgets/footer-contact-us.component";

@Component({
    selector: 'contact-us-screen',
    standalone: true,
    template: `
   <widget-page-title [widgetTitle]="pageTitle" [widgetImage]="heroImage"></widget-page-title>
<div class="container">

  <div class="rounded-md">
    <!-- <google-map></google-map> -->

  </div>

  <div class="mt-8 flex flex-col gap-4 md:flex-row-reverse md:justify-center md:items-center">
    <p class="text-blue_primary-light text-center text-3xl md:hidden md:text-start"> Get in touch </p>
    <p class="mt-2 text-blue_primary-dark_1 md:hidden">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Quis ipsum suspendisse ultrices gravida.
    </p>
    <div class="relative w-[21.5625rem] md:flex-1">
      <div class="absolute w-full h-full bg-blue_primary-dark_1 opacity-10 rounded-md"></div>
      <div
        class="absolute w-full h-full bg-gradient-to-r rounded-md from-[#4679B7] via-[#7F6ABB] to-[#00BDD0] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40 ">
      </div>
      <img class=" w-full rounded-lg object-cover" [src]="imge2" alt="" loading="lazy" />
    </div>
    <div class="md:flex-col md:flex-1 md:gap-8 text-blue_primary-dark_1 my-8">
    <p class="text-blue_primary-light text-3xl hidden md:block"> Get in touch </p>
    <p class="mt-2 text-blue_primary-dark_1 hidden md:block ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Quis ipsum suspendisse ultrices gravida.
    </p>
      <footer-contact-us-widget widgetSvgStroke="#4679BE" widgetTitle=""></footer-contact-us-widget>
    </div>
  </div>
</div>
<widget-contact-us-message></widget-contact-us-message>
<app-spinner [isLoading]="isLoading"></app-spinner>

  `,
    styleUrls: ['_styles.scss'],
    imports: [
        CommonModule,
        SpinnerComponent,
        WidgetPageTitle,
        FlowerWidget,
        ButtonComponents,
        WidgetContactUsMessage,
        GoogleMapsModule,
        FooterContactUsWidget
    ]
})
export class ContactUsScreenComponent {
  isLoading: boolean = false;
  pageTitle: string = 'Contact us';
  heroImage = '/assets/images/contact-us-hero.jpeg';
  imge2 = '/assets/images/imageMapTemp.png';

  onOurServicesClick() {}

}
