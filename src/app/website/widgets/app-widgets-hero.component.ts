import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/home-model';
import { ButtonComponents } from "./btn-base.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-widgets-hero',
    templateUrl: 'app-widgets-hero.component.html',
    standalone: true,
    imports: [ButtonComponents,NgOptimizedImage]
})

export class AppWidgetsHeroComponent {
  @Input({ required: true })
  heroData!: Hero;
  onOrderClick() { }
}
