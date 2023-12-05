import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { CustomerCardWidget } from '../../../widgets/customer-card-widget';
import { Testimonial } from 'src/app/website/models/home-model';

@Component({
  selector: 'home-section-testimonial',
  standalone: true,
  template: `
    <section class="mt-24">
      <div class="container">
        <div class="flex flex-col justify-center items-center text-center py-3 gap-4">
          <flower_widget
            title="Our Testimonial"
            titleClass="text-blue_primary-light text-4xl font-flower"
          ></flower_widget>
          <p class="text-blue_primary-dark_1 text-3xl md:text-4xl"> {{testimonial?.title}}</p>
        </div>
        <div class="container flex mt-6 gap-4 h-[14.5rem] overflow-x-auto  justify-center items-center md:flex-row ">
          <ng-container *ngFor="let item of testimonial?.cards">
          <widget-customer-card [widgetAvatar]="item.icon"
           [widgetDesc]="item.desc"
          [widgetTitle]="item.title"
          [widgetScore]="item.rate"></widget-customer-card>
          </ng-container>
          <!-- <widget-customer-card></widget-customer-card> -->
          <!-- <widget-customer-card></widget-customer-card> -->
        </div>
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
  imports: [CommonModule, FlowerWidget, CustomerCardWidget],
})
export class TestimonialSection {
  @Input({ required: true }) testimonial: Testimonial | undefined;
}
