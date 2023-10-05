import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isLoading" class="cssload-container">
      <div class="cssload-speeding-wheel"></div>
    </div>
  `,
})
export class SpinnerComponent {
  @Input() isLoading: boolean = false;
}
