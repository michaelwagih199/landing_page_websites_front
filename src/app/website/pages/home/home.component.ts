import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroApp } from './sections/hero.component';
import { AboutUs } from './sections/about-us.component';
import { AddsComponent } from '../../widgets/ads.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero></app-hero>
    <app-about-us ></app-about-us>
    <app-ads></app-ads>
    <app-about-us ></app-about-us>
    <app-ads></app-ads>
  `,
  imports: [CommonModule, HeroApp, AboutUs, AddsComponent],
})
export class HomeComponent {}
