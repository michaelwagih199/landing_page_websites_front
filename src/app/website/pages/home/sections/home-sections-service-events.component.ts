import { Component, Input, OnInit } from '@angular/core';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';
import { ComponentServiceCard } from '../../../widgets/service-card.component';
import { Card, ServicesAndEvents } from 'src/app/website/models/home-model';
import { CommonModule } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'home-sections-service-events',
  template: `
    <section class="h-service-section py-16">
      <div class="container">
        <div class="flex justify-between items-center">
          <h1 class="w-2/5 text-[2.5rem]/[53.32px] font-title font-bold  ">
            {{servicesAndEvents.header}}
          </h1>
          <a
            class="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-btnGradient-orange1 to-btnGradient-orange2 hover:from-btnGradient-orangeHover1 hover:to-btnGradient-orangeHover2"
            href="#"
            >{{servicesAndEvents.titleEvent}}</a
          >
        </div>

        <div class="grid grid-cols-4 gap-y-40 gap-x-5 mt-8">
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
