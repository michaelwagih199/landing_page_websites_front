import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject
} from '@angular/core';
import { ButtonComponents } from '../../../widgets/btn-base.component';

import { Hero } from 'src/app/website/models/home-model';
import { STYLES } from '../../../../utils/constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero bg-neutral-200">
      <div
        class="container flex flex-col-reverse py-4  justify-between items-center gap-3 text-center px-8 md:flex-row md:text-left md:py-0"
      >
        <svg
          class="rotate-180 mr-8 hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <rect
            class="hover:fill-accent  cursor-pointer transition-colors duration-200"
            width="28"
            height="28"
            fill="#00467E"
            rx="2"
          />
          <path
            d="M11 20L17 14L11 8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="flex flex-col gap-4">
          <h1 class="text-blue_primary-dark_4 text-2xl md:text-4xl">
            {{hero?.header}}
          </h1>
          <p class="text-base text-natural-customGray md:text-xl">
          {{ hero?.desc}}
          </p>
          <div class="flex justify-center gap-4 mt-2 md:mt-4  md:justify-start">
            <app-button
              [btnStyle]="btnWhite"
              (btnClick)="onOrderClick()"
              btnTitle="Order Now"
            ></app-button>
            <app-button
              [btnStyle]="btnBlue"
              (btnClick)="onOrderClick()"
              btnTitle="Know More"
            ></app-button>
          </div>
        </div>
        <div class="w-1/2">
          <img src="{{ hero?.heroImage }}" alt="" loading="lazy"/>
        </div>
        <svg
          class="ml-8 hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <rect
            class="hover:fill-accent  cursor-pointer transition-colors duration-200"
            width="28"
            height="28"
            fill="#00467E"
            rx="2"
          />
          <path
            d="M11 20L17 14L11 8"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
  imports: [CommonModule, ButtonComponents,NgOptimizedImage],
})
export class HeroApp implements OnChanges{

  @Input({ required: true }) hero: Hero |undefined;

  ngOnInit(): void {
    //console.log('fff', this.hero);
  }

  ngOnChanges(changes: SimpleChanges): void {
}

  btnWhite = STYLES.btnWhite;
  btnBlue = STYLES.btnBlue;


  onOrderClick() { }
}
