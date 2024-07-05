import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { SlideInterface } from '../models/slide.interface';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-widget-image-slider',
  templateUrl: 'app-widget-image-slider.component.html',
  styleUrls: ['_styles.scss'],
  standalone:true,
  imports:[CommonModule]
})

export class AppWidgetImageSlider implements OnInit,OnDestroy {
  @Input() slides: SlideInterface[] = [];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.clearTimeout(this.timeoutId);
    }
  }
  resetTimer() {
    if (isPlatformBrowser(this.platformId)) {
      // Your code that uses the window object
      if (this.timeoutId) {
        window.clearTimeout(this.timeoutId);
      }
      this.timeoutId = window.setTimeout(() => this.goToNext(), 2000);
    } else {
      // Handle server-side or non-browser execution (optional)
    }


  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
}
