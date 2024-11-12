import { Injectable } from '@angular/core';
import { HomeDataLake, ServicesAndEventsCard } from '../models/home-model';
import { CateringMenus, Menu } from '../models/menus-model';
import { CATERING_MENUS, HOME_DATA } from './static-db';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  getHomeItem(): HomeDataLake {
    return HOME_DATA
  }

  getCateringMenus(): CateringMenus {
    return CATERING_MENUS
  }
  getMenusTitle(): string[] {
    return CATERING_MENUS.menus.map(menuItem => menuItem.title);
  }

  getMenuByTitle(selected: string): Menu {
    return CATERING_MENUS.menus.filter(item => item.title == selected)[0];
  }

  getEventById(selected: string): ServicesAndEventsCard {
    return HOME_DATA.home.servicesAndEvents.cards.filter(item => item.id == selected)[0]
  }

}
