import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { CustomerCardWidget } from '../../../widgets/customer-card-widget';

@Component({
  selector: 'home-section-testimonial',
  standalone: true,
  template: `
    <section class="mt-8">
      <div class="container">
        <div class="flex flex-col justify-center items-center text-center py-3 gap-4">
          <flower_widget
            title="Our Testimonial"
            titleClass="text-blue_primary-light text-4xl font-kissMe"
          ></flower_widget>
          <p class="text-blue_primary-dark_4 text-4xl">What Our Customer Say</p>
        </div>
        <div class="flex flex-col gap-4 justify-center items-center md:flex-row ">
          <widget-customer-card></widget-customer-card>
          <widget-customer-card></widget-customer-card>
          <widget-customer-card></widget-customer-card>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
  imports: [CommonModule, FlowerWidget, CustomerCardWidget],
})
export class TestimonialSection {}
