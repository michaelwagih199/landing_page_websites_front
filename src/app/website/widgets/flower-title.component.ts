import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'flower_widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-3 items-center">
      <img [ngClass]="flowerClass" src="/assets/images/flowerImg.png" alt="Flower" srcset="">
      <div [ngClass]="titleClass">{{ title }}</div>
    </div>
  `,
})
export class FlowerWidget {
  @Input({ required: true }) title: string | undefined ;
  @Input({ required: true }) titleClass: string = '';
  @Input() flowerClass: string = '';
}
