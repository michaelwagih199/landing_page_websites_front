import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-service-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="">
      <img
        class=" w-60 h-60 object-cover rounded-md"
        [src]="cardCover"
        alt="Card Service"
      />
      <p class="text-blue_primary-dark_1 text-center py-2">{{cardTitle}}</p>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class ComponentServiceCard {
  @Input() cardTitle: string = 'Lashes Accessories';
  @Input() cardCover: string = '';
  @Output() btnClick = new EventEmitter();
}
