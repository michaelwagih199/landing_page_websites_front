import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/home-model';
import { ButtonComponents } from "./btn-base.component";

@Component({
    selector: 'app-widgets-hero',
    templateUrl: 'app-widgets-hero.component.html',
    standalone: true,
    imports: [ButtonComponents]
})

export class AppWidgetsHeroComponent {
  @Input({ required: true })
  heroData!: Hero;
  onOrderClick() { }
}
