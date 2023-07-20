import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroApp } from './sections/hero.component';
import { AboutUs } from './sections/about-us.component';
import { AddsComponent } from './sections/ads.component';
import { SectionService } from "./sections/service-section.component";
import { WhyChoseUs } from "./sections/why-chose-us.component";
import { TestimonialSection } from "./sections/testimonial.component";
import { StayTunedSection } from "./sections/stay-tuned.component";
import { FooterComponent } from "./sections/footer.component";

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
    <home-section-testimonial></home-section-testimonial>
    <home-section-stay-tuned></home-section-stay-tuned>
    <app-ads></app-ads>
    <footer-component></footer-component>
  `,
    imports: [CommonModule, HeroApp, AboutUs, AddsComponent, SectionService, WhyChoseUs, TestimonialSection, StayTunedSection, FooterComponent]
})
export class HomeComponent {}
