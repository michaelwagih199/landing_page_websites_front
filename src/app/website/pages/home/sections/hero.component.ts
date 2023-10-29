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
import { WidgetBaseCircularImage } from '../../../widgets/widget-base-circular-image.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="">
      <div
        class="container flex flex-col py-4 justify-between items-center gap-3 text-center px-8 md:flex-row md:text-left md:py-0"
      >
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
        <widget-base-circular-image
          class="mt-3"
          [widgetIsFourCircles]="true"
          widgetImageClass="absolute w-[13.0125rem] h-[13.0125rem] rounded-full object-cover"
          [widgetImage]="widgetImage"
        ></widget-base-circular-image>
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
  imports: [
    CommonModule,
    ButtonComponents,
    NgOptimizedImage,
    WidgetBaseCircularImage,
  ],
})
export class HeroApp {
  @Input({ required: true }) hero: Hero | undefined;

  widgetImage: any = '/assets/images/team1.png';
  ngOnInit(): void {
    //console.log('fff', this.hero);
  }

  btnWhite = STYLES.btnWhite;
  btnBlue = STYLES.btnBlue;

  onOrderClick() {}
}
