import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SpinnerComponent } from '../../../spinner.component';
import {
  AboutUsModel,
  FooterAndPublicInfo,
  Hero,
  StayTuned,
  Testimonial,
  WhyChooseUs
} from '../../models/home-model';
import { HomeService } from '../../service/home.service';
import { AboutUs } from './sections/about-us.component';
import { AddsComponent } from './sections/ads.component';
import { FooterComponent } from './sections/footer.component';
import { HeroApp } from './sections/hero.component';
import { SectionService } from './sections/service-section.component';
import { StayTunedSection } from './sections/stay-tuned.component';
import { TestimonialSection } from './sections/testimonial.component';
import { WhyChoseUsComponent } from './sections/why-chose-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero [hero]="hero"></app-hero>
    <app-about-us [aboutUs]="aboutUs"></app-about-us>
    <app-ads></app-ads>
    <home-section-service
      serviceTitle="Popular services"
    ></home-section-service>
    <home-section-why-chose-us [whyChoseUs]="whyChooseUs"></home-section-why-chose-us>
    <home-section-service serviceTitle="New services"></home-section-service>
    <app-ads></app-ads>
    <home-section-testimonial [testimonial]="testimonial"></home-section-testimonial>
    <home-section-stay-tuned [stayTone]="stayTuned"></home-section-stay-tuned>
    <app-ads></app-ads>
    <app-spinner [isLoading]="isLoading"></app-spinner>
  `,
  imports: [
    CommonModule,
    HeroApp,
    AboutUs,
    AddsComponent,
    SectionService,
    WhyChoseUsComponent,
    TestimonialSection,
    StayTunedSection,
    FooterComponent,
    SpinnerComponent,
  ],
})
export class HomeComponent implements OnInit {
  private homeService = inject(HomeService);
  isLoading: boolean = false;

  hero!: Hero;
  aboutUs!: AboutUsModel;
  whyChooseUs!: WhyChooseUs;
  testimonial!: Testimonial;
  stayTuned!: StayTuned;
  footerAndPublicInfo!: FooterAndPublicInfo;

  ngOnInit(): void {
    this.isLoading = true;
    this.homeService.getHomeItem()
      .subscribe(data => {
        if (data.statusCode === 200) {
          console.log('Home Data', data);

          this.hero = data.data[0].home.hero
          this.aboutUs = data.data[0].home.aboutUs
          this.whyChooseUs = data.data[0].home.whyChooseUs
          this.testimonial = data.data[0].home.testimonial
          this.stayTuned = data.data[0].home.stayTuned
        }
        this.isLoading = false;
      });
  }
}
