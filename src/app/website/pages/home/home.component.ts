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
import { AboutUsHomeSection } from './sections/about-us.component';
import { AddsComponent } from './sections/ads.component';
import { FooterComponent } from '../../layout/website-layout/components/footer.component';
import { HeroApp } from './sections/hero.component';
import { SectionService } from './sections/service-section.component';
import { StayTunedSection } from './sections/stay-tuned.component';
import { TestimonialSection } from './sections/testimonial.component';
import { WhyChoseUsComponent } from './sections/why-chose-us.component';
import { WidgetSocialIcon } from "../../layout/website-layout/components/widget-social-icon.component";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-hero [hero]="hero"></app-hero>
    <!-- <app-ads></app-ads> -->
    <home-section-service
    serviceTitle="Our Services"
    ></home-section-service>
    <app-about-us-home-section [aboutUs]="aboutUs"></app-about-us-home-section>
    <app-ads></app-ads>
    <home-section-why-chose-us [whyChoseUs]="whyChooseUs"></home-section-why-chose-us>
    <home-section-testimonial [testimonial]="testimonial"></home-section-testimonial>
    <home-section-stay-tuned [stayTone]="stayTuned"></home-section-stay-tuned>
    <app-ads></app-ads>
    <app-spinner [isLoading]="isLoading"></app-spinner>
  `,
  imports: [
    CommonModule,
    HeroApp,
    AboutUsHomeSection,
    AddsComponent,
    SectionService,
    WhyChoseUsComponent,
    TestimonialSection,
    StayTunedSection,
    FooterComponent,
    SpinnerComponent,
    WidgetSocialIcon
  ]
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
          this.hero = data.data.home.hero
          this.aboutUs = data.data.home.aboutUs
          this.whyChooseUs = data.data.home.whyChooseUs
          this.testimonial = data.data.home.testimonial
          this.stayTuned = data.data.home.stayTuned
        }
        this.isLoading = false;
      });
  }
}
