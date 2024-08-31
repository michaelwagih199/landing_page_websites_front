import { ViewportScroller } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Hero, HomeDataLake, ServicesAndEvents } from '../../models/home-model';
import { SlideInterface } from '../../models/slide.interface';
import { HomeService } from '../../service/app.service';
import { AppWidgetCateringImageSlider } from "../../widgets/app-widget-catering-image-slider.component";
import { AppWidgetsHeroComponent } from "../../widgets/app-widgets-hero.component";
import { EventFormTeamCard } from "../../widgets/event-form.component";

@Component({
  selector: 'app-screens.catering',
  templateUrl: 'catering.component.html',
  standalone: true,
  imports: [AppWidgetsHeroComponent, EventFormTeamCard, AppWidgetCateringImageSlider]
})

export class AppScreenCatering implements OnInit {

  private homeService = inject(HomeService);
  private scroller = inject(ViewportScroller);
  private router = inject(Router);

  isLoading: boolean = false;
  hero!: Hero;
  servicesAndEvents!: ServicesAndEvents;

  slides: SlideInterface[] = [
    { url: '/assets/images/events_sliders/slider1.png', title: 'Birthday', desc: 'Custom cakes, kid-friendly menus, interactive food stations, and edible favors.' },
    { url: '/assets/images/events_sliders/slider2.png', title: 'Wedding', desc: 'Elegant dinners, cocktail appetizers, themed beverages, and dessert tables.' },
    { url: '/assets/images/events_sliders/slider3.png', title: 'Outdoor Events', desc: 'BBQ stations, picnic baskets, refreshing drinks,and portable kitchens.' },
    { url: '/assets/images/events_sliders/slider4.png', title: 'Private Parties', desc: 'Bespoke menus, full-service catering, themed cuisine,and personal chefs.' },
    { url: '/assets/images/events_sliders/slider5.png', title: 'Social Events', desc: 'Casual buffets, interactive stations, beverage bars,and finger foods.' },
    { url: '/assets/images/events_sliders/slider6.png', title: 'Corporate Events', desc: 'Professional buffets, boxed lunches, coffee stations, and networking appetizers.' },
    { url: '/assets/images/events_sliders/slider7.png', title: 'New Year’s Eve', desc: "Sophisticated hors d'oeuvres, champagne bars, midnight snacks, and festive decor." },
    { url: '/assets/images/events_sliders/slider8.png', title: 'Special Event', desc: "Themed menus, live cooking, premium drinks, and decor coordination." },
  ];

  ngOnInit(): void {
    this.isLoading = true;
    const datalake: HomeDataLake = this.homeService.getHomeItem();
    this.hero = datalake.home.hero;
    this.servicesAndEvents = datalake.home.servicesAndEvents;
  }

  oExploreClick() {
    this.router.navigate(['/catering/menu']);
    }

  scrollToComponent(componentSelector: string) {
    const element = document.querySelector(componentSelector);
    if (element) {
      this.scroller.scrollToAnchor(element.id);
    } else {
      console.error('Target component not found');
    }
  }
}
