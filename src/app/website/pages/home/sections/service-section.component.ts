import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponents } from '../../../widgets/view-all.component';
import { ComponentServiceCard } from 'src/app/website/widgets/service-card.component';
import { FlowerWidget } from "../../../widgets/flower-title.component";

@Component({
    selector: 'home-section-service',
    standalone: true,
    template: `
    <section class="mt-12 md:mt-24">
      <div class="container">
        <div class="flex flex-col justify-center items-center gap-5">
        <flower_widget
          [title]="serviceTitle"
          titleClass="text-blue_primary-light text-4xl font-normal font-flower"
        ></flower_widget>
        <h1 class="text-blue_primary-dark_1 text-3xl text-center">{{serviceDesc}}</h1>
        </div>
        <div class=" grid grid-cols-2 gap-4 mt-12 md:grid-cols-4">
          <div *ngFor="let item of cards">
            <component-service-card
              [cardCover]="item.imgSrc"
            ></component-service-card>
          </div>
        </div>
      </div>
    </section>
  `,
    styleUrls: ['../_home-style.scss'],
    imports: [CommonModule, ButtonComponents, ComponentServiceCard, FlowerWidget]
})
export class SectionService {
  cards = [
    { imgSrc: '/assets/images/imgeTemp1.png ' },
    { imgSrc: '/assets/images/imgeTemp1.png' },
    { imgSrc: '/assets/images/imgeTemp1.png' },
    { imgSrc: '/assets/images/imgeTemp1.png' },
  ];
  @Input() serviceTitle: string = '';
  @Input() serviceDesc: string = 'We Use Pure & Natural Ingredients';
  @Input() btnStyle: string = '';
}
