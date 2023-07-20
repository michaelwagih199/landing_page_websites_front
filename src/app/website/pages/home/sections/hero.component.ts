import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponents } from '../../../widgets/btn-base.component';

import { STYLES } from '../../../../utils/constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero bg-neutral-200">
      <div class="container flex justify-between items-center gap-4">
        <svg
          class="mr-8"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="hover:stroke-accent  cursor-pointer active:bg-blue_primary-light transition-colors duration-200"
            d="M7 13L1 7L7 1"
            stroke="#00467E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div class="flex flex-col gap-4">
          <h1 class="text-blue_primary-dark_4 text-4xl">
            Choose The best For Your Skin
          </h1>
          <p class="text-xl text-natural-customGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            est sed lacus volutpat lobortis. Lorem ipsum
          </p>
          <div class="flex gap-4 mt-6">
            <app-button
              [btnStyle]="btnWhite"
              (btnClick)="onOrderClick()"
              btnTitle="Order Now"
            ></app-button>
            <app-button
              btnStyle="bg-blue_primary-dark_4 text-lg hover:bg-accent active:text-blue_primary-dark_4 text-white py-2 w-36 px-2 rounded-full transition-colors duration-200"
              (btnClick)="onOrderClick()"
              btnTitle="Order Now"
            ></app-button>
          </div>
        </div>
        <div class="hero__char">
          <img src="{{ charImag }}" alt="" />
        </div>
<!--
        <svg
          class="rotate-180 ml-8"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="hover:stroke-accent cursor-pointer transition-colors duration-200"
            d="M7 13L1 7L7 1"
            stroke="#00467E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg> -->
        <svg

          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <rect width="28" height="28" rx="8" fill="#00467E" />
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
  imports: [CommonModule, ButtonComponents],
})
export class HeroApp implements AfterViewInit {
  sliderImages: any;
  dots: any;
  currentImg = 0;
  interval = 3000;
  @ViewChild('dot')
  dot!: ElementRef;
  imagUri: string = '/assets/images/hero_bg.png';
  charImag: string = '/assets/images/hero_char_1.png';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  btnWhite = STYLES.btnWhite;

  ngAfterViewInit(): void {
    // this.sliderImages =
    //   this.elRef.nativeElement.querySelectorAll('.slider img');
    // this.dots = this.elRef.nativeElement.querySelectorAll('.dot');
    // console.log(this.sliderImages);
    //this.dot.nativeElement.setAttribute('highlight', '');
  }

  changeSlide(index: number) {
    console.log(index);

    this.renderer.setStyle(this.dot.nativeElement, 'opacity', '0');
  }

  changeColor() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }

  onOrderClick() {}
}
