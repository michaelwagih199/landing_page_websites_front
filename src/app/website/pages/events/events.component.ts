import { Component, OnInit, inject } from '@angular/core';
import { AppWidgetsHeroComponent } from "../../widgets/app-widgets-hero.component";
import { HomeService } from '../../service/app.service';
import { Hero, AboutUsModel, WhyChooseUs, Makespecialevents, ServicesAndEvents, FooterAndPublicInfo, OurTeam, HomeDataLake } from '../../models/home-model';
import { ComponentServiceCard } from "../../widgets/service-card.component";
import { EventFormTeamCard } from "../../widgets/event-form.component";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-screen-events',
  templateUrl: 'events.component.html',
  standalone: true,
  imports: [AppWidgetsHeroComponent, ComponentServiceCard, EventFormTeamCard]
})

export class AppScreenEvents implements OnInit {

  private homeService = inject(HomeService);
  readonly dialog = inject(MatDialog);

  isLoading: boolean = false;
  hero!: Hero;
  servicesAndEvents!: ServicesAndEvents;

  ngOnInit(): void {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.servicesAndEvents = datalake.home.servicesAndEvents;
  }

  oExploreClick() {

  }

}
