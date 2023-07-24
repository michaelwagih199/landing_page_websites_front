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
        class="rotate-180 mr-8"
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
              [btnStyle]="btnBlue"
              (btnClick)="onOrderClick()"
              btnTitle="Know More"
            ></app-button>
          </div>
        </div>
        <div class="hero__char">
          <img src="{{ charImag }}" alt="" />
        </div>
        <svg
        class="ml-8"
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
  btnBlue = STYLES.btnBlue;

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
