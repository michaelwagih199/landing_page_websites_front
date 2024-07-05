import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'footer-component',
  standalone: true,
  templateUrl:'footer.html',
  styleUrls: ['../../_layout.scss'],
  imports: [CommonModule, RouterModule]
})
export class FooterComponent {
  @Input() btnStyle: string = '';
  @Output() btnClick = new EventEmitter();
}
