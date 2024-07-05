import { Component, OnInit, inject } from '@angular/core';
import { AppWidgetsHeroComponent } from "../../widgets/app-widgets-hero.component";
import { HomeService } from '../../service/app.service';
import { Hero, AboutUsModel, WhyChooseUs, Makespecialevents, ServicesAndEvents, FooterAndPublicInfo, HomeDataLake, OurTeam } from '../../models/home-model';
import { HomeSectionsWhyChooseUsComponent } from "../home/sections/home-sections-why-choose-us.component";
import { HomeSectionsAboutUsComponent } from "../home/sections/home-sections-about-us.component";
import { ComponentTeamCard } from "../../widgets/team-card.component";
@Component({
    selector: 'app-screens-about-us',
    templateUrl: 'about-us.component.html',
    standalone: true,
    imports: [AppWidgetsHeroComponent, HomeSectionsWhyChooseUsComponent, HomeSectionsAboutUsComponent, ComponentTeamCard]
})
export class AppScreenAboutUs implements OnInit {
  private homeService = inject(HomeService);
  isLoading: boolean = false;

  hero!: Hero;
  aboutUs!: AboutUsModel;
  whyChooseUs!: WhyChooseUs;
  makeSpecialEvents!: Makespecialevents;
  servicesAndEvents!: ServicesAndEvents;
  footerAndPublicInfo!: FooterAndPublicInfo;
  ourTeam!: OurTeam;

  ngOnInit(): void {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.aboutUs = datalake.home.aboutUs;
    this.whyChooseUs = datalake.home.whyChooseUs;
    this.makeSpecialEvents = datalake.home.makeSpecialEvents;
    this.servicesAndEvents = datalake.home.servicesAndEvents;
    this.ourTeam = datalake.home.ourTeam;
  }
}
