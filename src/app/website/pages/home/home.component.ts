import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroApp } from './sections/hero.component';
import { AboutUs } from './sections/about-us.component';
import { AddsComponent } from './sections/ads.component';
import { SectionService } from './sections/service-section.component';
import { WhyChoseUs } from './sections/why-chose-us.component';
import { TestimonialSection } from './sections/testimonial.component';
import { StayTunedSection } from './sections/stay-tuned.component';
import { FooterComponent } from './sections/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero></app-hero>
    <app-about-us></app-about-us>
    <app-ads></app-ads>
    <home-section-service
      serviceTitle="Popular services"
    ></home-section-service>
    <home-section-why-chose-us></home-section-why-chose-us>
    <home-section-service serviceTitle="New services"></home-section-service>
    <app-ads></app-ads>
    <home-section-testimonial></home-section-testimonial>
    <home-section-stay-tuned></home-section-stay-tuned>
    <app-ads></app-ads>

    <div
      class=" mt-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
    >
      <div class="md:flex">
        <div class="md:shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="/assets/images/unsplash2.jpg"
            alt="Modern building architecture"
          />
        </div>
        <div class="p-8">
          <div
            class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
          >
            Company retreats
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Incredible accommodation for your team</a
          >
          <p class="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
  `,
  imports: [
    CommonModule,
    HeroApp,
    AboutUs,
    AddsComponent,
    SectionService,
    WhyChoseUs,
    TestimonialSection,
    StayTunedSection,
    FooterComponent,
  ],
})
export class HomeComponent {}
