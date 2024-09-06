import { Component, inject, OnInit } from '@angular/core';
import { AppWidgetsHeroComponent } from "../../../widgets/app-widgets-hero.component";
import { Hero, HomeDataLake } from 'src/app/website/models/home-model';
import { HomeService } from 'src/app/website/service/app.service';

@Component({
  selector: 'app-screens-events-details',
  templateUrl: 'events-details.component.html',
  standalone: true,
  imports: [AppWidgetsHeroComponent]
})

export class EventsDetailsComponents implements OnInit {
  private homeService = inject(HomeService);
  hero!: Hero;

  ngOnInit() {
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
  }

}
