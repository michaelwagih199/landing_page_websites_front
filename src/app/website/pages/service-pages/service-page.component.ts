import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetPageTitle } from "../../widgets/widget-page-title.component";
import { WidgetContactUsMessage } from "../../widgets/widget-contact-us-message.component";
import { SpinnerComponent } from "../../../spinner.component";
import { SectionService } from "../home/sections/service-section.component";
import { WidgetSearchPar } from "../../widgets/widget-search-par.component";
import { ComponentServiceCard } from "../../widgets/service-card.component";

@Component({
    selector: 'app-service-page',
    standalone: true,
    template: `
    <section>
  <widget-page-title [widgetTitle]="pageTitle" [widgetImage]="heroImage"></widget-page-title>
  <div class="container">
    <div class="mt-12">
      <widget-search-par></widget-search-par>
    </div>

    <div class=" grid grid-cols-2 gap-4 mt-12 md:grid-cols-4">
          <div *ngFor="let item of cards">
            <component-service-card
              [cardCover]="item.imgSrc"
            ></component-service-card>
          </div>
        </div>

  </div>
  <widget-contact-us-message></widget-contact-us-message>
  <app-spinner [isLoading]="isLoading"></app-spinner>
</section>
    `,
    styleUrls: ['_service-page.component.scss'],
    imports: [CommonModule, WidgetPageTitle, WidgetContactUsMessage, SpinnerComponent, SectionService, WidgetSearchPar, ComponentServiceCard]
})
export class ServicePageComponent {
  isLoading: boolean = false;
  pageTitle: string = 'Services';
  heroImage = '/assets/images/service_home.jpeg'
  cards = [
    { imgSrc: '/assets/images/imgeTemp1.png ' },
    { imgSrc: '/assets/images/imgeTemp1.png' },
    { imgSrc: '/assets/images/imgeTemp1.png' },
    { imgSrc: '/assets/images/imgeTemp1.png' },
  ];
}
