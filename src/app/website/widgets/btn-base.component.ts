import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
  <!-- <p class="bg-gradient-to-r from-btnGradient-orange1 to-btnGradient-orange2 hover:from-btnGradient-orangeHover1 hover:to-btnGradient-orangeHover2 text-lg active:text-veryLightPink text-white font-bold px-8 py-3 w-btn-width rounded-full transition-colors duration-200 shadow-md text-center mb-3 ">Order Now</p> -->
    <button
      (click)="btnClick.emit()"
      [ngClass]="btnStyle">
      {{ btnTitle }}
    </button>
  `,
  styleUrls: ['_styles.scss'],
})
export class ButtonComponents {
  @Input({ required: true })
  btnTitle: string = 'Order Now';
  @Input()
  btnStyle: string = 'bg-gradient-to-r from-btnGradient-orange1 to-btnGradient-orange2 hover:from-btnGradient-orangeHover1 hover:to-btnGradient-orangeHover2 text-lg active:text-veryLightPink text-white font-bold px-8 py-3 w-btn-width rounded-full transition-colors duration-200 shadow-md';
  @Output()
  btnClick = new EventEmitter();
}
