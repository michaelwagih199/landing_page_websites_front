import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="my-12 md:my-24">
      <div class="container mx-4">
        <img class="w-full" src="/assets/images/offer.png"  alt="" srcset="" />
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
})
export class AddsComponent {
  @Input() btnTitle: string = 'Order Now';
  @Input() btnStyle: string = '';
  @Output() btnClick = new EventEmitter();
}
