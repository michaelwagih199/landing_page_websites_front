import { Component, Input, OnInit } from '@angular/core';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';
import { ComponentServiceCard } from '../../../widgets/service-card.component';
import { Card, ServicesAndEvents } from 'src/app/website/models/home-model';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'home-sections-service-events',
  template: `
    <section class=" sm:pb-44 sm:bt-16 pt-8 pb-44 h-auto">
      <div class="container">
        <div class="flex justify-between items-center">
          <h1 class="sm:w-5/12 w-9/12 sm:text-[2.5rem]/[53.32px] text-xl font-title font-bold  ">
            {{servicesAndEvents.header}}
          </h1>
          <a
            class="sm:text-2xl text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-btnGradient-orange1 to-btnGradient-orange2 hover:from-btnGradient-orangeHover1 hover:to-btnGradient-orangeHover2"
            href="#"
            >{{servicesAndEvents.titleEvent}}</a
          >
        </div>

        <div class="flex flex-col	 sm:flex-row justify-between sm:flex-wrap gap-y-40 gap-x-5 mt-8  items-center">
          @for (item of servicesAndEvents.cards.slice(0, 4) ; track item) {
            <component-service-card
              [cardCover]="item.cardCover"
              [cardDesc]="item.desc"
              [cardTitle]="item.title"
            ></component-service-card>
          }
      </div>

      </div>
    </section>
  `,
  standalone: true,
  imports: [ImageShadowEffectWidget, ComponentServiceCard, CommonModule],
})
export class HomeSectionsServiceEventsComponent {
  @Input({ required: true })
  servicesAndEvents!: ServicesAndEvents;

  onEventsClick() {

  }

}
