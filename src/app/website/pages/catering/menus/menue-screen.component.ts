import { Component, inject, OnInit } from '@angular/core';
import { AppWidgetsHeroComponent } from "../../../widgets/app-widgets-hero.component";
import { EventFormTeamCard } from "../../../widgets/event-form.component";
import { HomeService } from 'src/app/website/service/app.service';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Hero, HomeDataLake, ServicesAndEvents } from 'src/app/website/models/home-model';
import { ComponentServiceCard } from "../../../widgets/service-card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-screens-menu',
  templateUrl: 'menu-screen.component.html',
  standalone: true,
  imports: [AppWidgetsHeroComponent, EventFormTeamCard, ComponentServiceCard,FormsModule,CommonModule]
})

export class MenuComponent implements OnInit {

  private homeService = inject(HomeService);
  private scroller = inject(ViewportScroller);
  isLoading: boolean = false;
  hero!: Hero;
  menus!: ServicesAndEvents;
  eventTypeList = ['Wedding', 'Catering', 'New Year Event']
  selectedEventType = 'Make a Magical Event';

  ngOnInit() {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.menus = datalake.home.menus
  }

}
