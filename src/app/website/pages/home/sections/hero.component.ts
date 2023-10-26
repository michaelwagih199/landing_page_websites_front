import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ButtonComponents } from '../../../widgets/btn-base.component';

import { Hero } from 'src/app/website/models/home-model';
import { STYLES } from '../../../../utils/constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="">
      <div
        class="container flex flex-col py-4 justify-between items-center gap-3 text-center px-8 md:flex-row md:text-left md:py-0">
        <div class="flex flex-col gap-4">
          <h1 class="text-blue_primary-dark_1 text-4xl">
            {{ hero?.header }}
          </h1>
            <app-button
              [btnStyle]="btnBlue"
              (btnClick)="onOrderClick()"
              btnTitle="Order Now"
            ></app-button>
        </div>
        <div class="w-1/2">
          <img src="{{ hero?.heroImage }}" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
  imports: [CommonModule, ButtonComponents, NgOptimizedImage],
})
export class HeroApp implements OnChanges {
  @Input({ required: true }) hero: Hero | undefined;

  ngOnInit(): void {
    //console.log('fff', this.hero);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  btnWhite = STYLES.btnWhite;
  btnBlue = STYLES.btnBlue;

  onOrderClick() {}
}
