import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="btnClick.emit()"
      [ngClass]="btnStyle"
    >
      {{ btnTitle }}
    </button>
  `,
  styleUrls: ['./widget-style.scss'],
})
export class ButtonComponents {
  @Input({ required: true })
  btnTitle: string = 'Order Now';
  @Input()
  btnStyle: string = 'bg-blue_primary-dark_1 text-lg hover:bg-blue_primary-hover active:text-blue_primary-light text-white font-semibold py-2 w-36 px-3 rounded-full transition-colors duration-200';
  @Output()
  btnClick = new EventEmitter();
}
