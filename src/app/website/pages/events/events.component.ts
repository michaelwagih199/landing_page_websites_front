import { Component, OnInit, inject } from '@angular/core';
import { AppWidgetsHeroComponent } from "../../widgets/app-widgets-hero.component";
import { HomeService } from '../../service/app.service';
import { Hero, ServicesAndEvents, HomeDataLake, Card } from '../../models/home-model';
import { ComponentServiceCard } from "../../widgets/service-card.component";
import { EventFormTeamCard } from "../../widgets/event-form.component";
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-events',
  templateUrl: 'events.component.html',
  standalone: true,
  imports: [AppWidgetsHeroComponent, ComponentServiceCard, EventFormTeamCard]
})

export class AppScreenEvents implements OnInit {

  private homeService = inject(HomeService);
  readonly dialog = inject(MatDialog);
  private router = inject(Router);

  isLoading: boolean = false;
  hero!: Hero;
  servicesAndEvents!: ServicesAndEvents;

  ngOnInit(): void {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.servicesAndEvents = datalake.home.servicesAndEvents;
  }

  oExploreClick(item: Card) {
    this.router.navigate(['events/details'],{ queryParams: { id: item.id} });
  }

}
