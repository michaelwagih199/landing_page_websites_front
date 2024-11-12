import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, HomeDataLake, ServicesAndEventsCard } from 'src/app/website/models/home-model';
import { HomeService } from 'src/app/website/service/app.service';
import { AppWidgetsHeroComponent } from "../../../widgets/app-widgets-hero.component";
import { ImageShadowEffectWidget } from 'src/app/website/widgets/image-effect.component';

@Component({
  selector: 'app-screens-events-details',
  templateUrl: 'events-details.component.html',
  standalone: true,
imports: [AppWidgetsHeroComponent,ImageShadowEffectWidget]
})


export class EventsDetailsComponents implements OnInit {
  private homeService = inject(HomeService);
  private route = inject(ActivatedRoute);
  hero!: Hero;
  selectedEvent!: ServicesAndEventsCard;

  ngOnInit() {
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.route.queryParams.subscribe(params => {
      this.selectedEvent = this.homeService.getEventById(params['id']);
    });
  }

}
