import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroApp } from './sections/hero.component';
import { AboutUs } from './sections/about-us.component';
import { AddsComponent } from './sections/ads.component';
import { SectionService } from "./sections/service-section.component";
import { WhyChoseUs } from "./sections/why-chose-us.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-hero></app-hero>
    <app-about-us ></app-about-us>
    <app-ads></app-ads>
    <home-section-service  serviceTitle="Popular services"></home-section-service>
    <home-section-why-chose-us></home-section-why-chose-us>
    <home-section-service serviceTitle="New services"></home-section-service>
    <app-ads></app-ads>
  `,
    imports: [CommonModule, HeroApp, AboutUs, AddsComponent, SectionService, WhyChoseUs]
})
export class HomeComponent {}
