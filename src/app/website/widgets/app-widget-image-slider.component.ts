import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { SlideInterface } from '../models/slide.interface';
import { CommonModule, isPlatformBrowser, ViewportScroller } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponents } from "./btn-base.component";

@Component({
  selector: 'app-widget-image-slider',
  templateUrl: 'app-widget-image-slider.component.html',
  styleUrls: ['_styles.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponents]
})

export class AppWidgetImageSlider implements OnInit, OnDestroy {
  @Input() slides: SlideInterface[] = [];

  @Output()
  btnOrderClick = new EventEmitter();

  @Output()
  btnExploreClick = new EventEmitter();

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private scroller: ViewportScroller) { }

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
      // 10000ms
      this.timeoutId = window.setTimeout(() => this.goToNext(), 5000);
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

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }


  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlide() {
    return {
      "url": this.slides[this.currentIndex].url,
      "title": this.slides[this.currentIndex].title,
      "desc": this.slides[this.currentIndex].desc
    }
  }

  onOrderClick() {

  }
}
