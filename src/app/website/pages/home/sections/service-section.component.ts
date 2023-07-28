import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponents } from '../../../widgets/view-all.component';
import { ComponentServiceCard } from 'src/app/website/widgets/service-card.component';

@Component({
  selector: 'home-section-service',
  standalone: true,
  template: `
    <section class="mt-8 px-4">
      <div class="container">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-blue_primary-dark_4 text-lg app-underline">
              {{serviceTitle}}
            </h2>
          </div>
          <div>
            <component-view-base></component-view-base>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-2 md:grid-cols-4">
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
  imports: [CommonModule, ButtonComponents, ComponentServiceCard],
})
export class SectionService {
  cards = [
    { imgSrc: '/assets/images/imgeTemp1.png ' },
    { imgSrc: '/assets/images/unsplash2.jpg' },
    { imgSrc: '/assets/images/unsplash2.jpg' },
    { imgSrc: '/assets/images/imgeTemp1.png' },
  ];
  @Input() serviceTitle: string = 'New Services';
  @Input() btnStyle: string = '';
}
