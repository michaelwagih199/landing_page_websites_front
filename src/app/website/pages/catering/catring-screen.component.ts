import { Component, OnInit, inject } from '@angular/core';
import { Hero, HomeDataLake, ServicesAndEvents } from '../../models/home-model';
import { SlideInterface } from '../../models/slide.interface';
import { HomeService } from '../../service/app.service';
import { AppWidgetImageSlider } from "../../widgets/app-widget-image-slider.component";
import { AppWidgetsHeroComponent } from "../../widgets/app-widgets-hero.component";
import { EventFormTeamCard } from "../../widgets/event-form.component";

@Component({
    selector: 'app-screens.catering',
    templateUrl: 'catering.component.html',
    standalone: true,
    imports: [AppWidgetsHeroComponent, EventFormTeamCard, AppWidgetImageSlider]
})

export class AppScreenCatering implements OnInit {


  private homeService = inject(HomeService);
  isLoading: boolean = false;
  hero!: Hero;
  servicesAndEvents!: ServicesAndEvents;

  slides: SlideInterface[] = [
    { url: '/assets/images/serviceCard2.jpeg', title: 'beach',desc:'lorem' },
    { url: '/assets/images/serviceCard3.jpeg', title: 'beach',desc:'lorem' },
    { url: '/assets/images/serviceCard5.jpeg', title: 'beach',desc:'lorem' },
  ];

  ngOnInit(): void {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.servicesAndEvents = datalake.home.servicesAndEvents;
  }

}
