import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'flower_widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex gap-3 items-center">
      <img src="/assets/images/flowerImg.png" alt="Flower" srcset="">
      <div [ngClass]="titleClass">{{ title }}</div>
    </div>
  `,
})
export class FlowerWidget {
  @Input() title: string = 'About Us';
  @Input() titleClass: string = '';
}
