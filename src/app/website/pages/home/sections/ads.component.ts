import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="mt-8">
      <div class="container">
        <img class="w-full" src="/assets/images/ads.png"  alt="" srcset="" />
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
