import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Hero, HomeDataLake } from 'src/app/website/models/home-model';
import { Menu, MenusCard } from 'src/app/website/models/menus-model';
import { HomeService } from 'src/app/website/service/app.service';
import { AppWidgetsHeroComponent } from "../../../widgets/app-widgets-hero.component";
import { EventFormTeamCard } from "../../../widgets/event-form.component";
import { ComponentServiceCard } from "../../../widgets/service-card.component";
import { DialogPDFViwer } from '../../dialogs/dialog-pdf.component';

@Component({
  selector: 'app-screens-menu',
  templateUrl: 'menu-screen.component.html',
  standalone: true,
  imports: [AppWidgetsHeroComponent, EventFormTeamCard, ComponentServiceCard, FormsModule, CommonModule]
})

export class MenuComponent implements OnInit {

  private homeService = inject(HomeService);
  readonly dialog = inject(MatDialog);

  isLoading: boolean = false;
  hero!: Hero;
  menusCard: Menu = {
    menusCards: [],
    title: ''
  };
  eventTypeList: string[] = []
  selectedEventType = 'Make a Magical Event';

  ngOnInit() {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.eventTypeList = this.homeService.getMenusTitle()
  }

  onEventTypeChange(selected: string) {
    this.menusCard = this.homeService.getMenuByTitle(selected);
  }

  oExploreClick(item: MenusCard) {
    window.open(item.pdfPath, '_blank');
  }

}
