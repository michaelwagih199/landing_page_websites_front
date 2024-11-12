import { Component, OnInit, inject } from '@angular/core';
import {
  AboutUsModel,
  FooterAndPublicInfo,
  Hero,
  HomeDataLake,
  Makespecialevents,
  ServicesAndEvents,
  WhyChooseUs
} from '../../models/home-model';
import { HomeService } from '../../service/app.service';
import { AppWidgetsHeroComponent } from '../../widgets/app-widgets-hero.component';
import { HomeMakeSpecialEventsComponent } from "./sections/home-make-special-events.component";
import { HomeSectionsAboutUsComponent } from './sections/home-sections-about-us.component';
import { HomeSectionsServiceEventsComponent } from './sections/home-sections-service-events.component';
import { HomeSectionsWhyChooseUsComponent } from './sections/home-sections-why-choose-us.component';
import { UserService } from '../../service/customers.service';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <app-widgets-hero [heroData]="hero"></app-widgets-hero>
      <home-sections-about-us [aboutUsData]="aboutUs"></home-sections-about-us>
      <home-sections-service-events [servicesAndEvents]="servicesAndEvents"></home-sections-service-events>
      <home-sections-why-choose-us [whyChooseUs]="whyChooseUs"></home-sections-why-choose-us>
      <home-make-special-events [makeSpecialEvents]="makeSpecialEvents"></home-make-special-events>
    </section>
  `,
  imports: [
    AppWidgetsHeroComponent,
    HomeSectionsAboutUsComponent,
    HomeSectionsWhyChooseUsComponent,
    HomeSectionsServiceEventsComponent,
    HomeMakeSpecialEventsComponent
  ]
})
export class HomeComponent implements OnInit {
  private homeService = inject(HomeService);
  private userService = inject(UserService);
  isLoading: boolean = false;
  hero!: Hero;
  aboutUs!: AboutUsModel;
  whyChooseUs!: WhyChooseUs;
  makeSpecialEvents!: Makespecialevents;
  servicesAndEvents!: ServicesAndEvents;
  footerAndPublicInfo!: FooterAndPublicInfo;

  ngOnInit(): void {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.aboutUs = datalake.home.aboutUs;
    this.whyChooseUs = datalake.home.whyChooseUs;
    this.makeSpecialEvents = datalake.home.makeSpecialEvents;
    this.servicesAndEvents = datalake.home.servicesAndEvents;
    this.fetchUsers()

  }

  fetchUsers() {
    console.log('here');

    this.userService.fetchUsers().subscribe(
        (response) => {
          console.log(response);
            // this.users = response;
        },
        (error) => {
            console.error(error);
        }
    );
}
}
