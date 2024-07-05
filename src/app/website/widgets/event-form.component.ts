import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageShadowEffectWidget } from "./image-effect.component";
import { ButtonComponents } from "./btn-base.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-widgets-event-form',
  standalone: true,
  templateUrl: 'event-form.component.html',
  styleUrls: ['_styles.scss'],
  imports: [CommonModule, ImageShadowEffectWidget, ButtonComponents,FormsModule]
})
export class EventFormTeamCard {
  @Output() btnClick = new EventEmitter();
  onOrderClick() { }
  eventTypeList = ['Wedding Event', 'Special Event', 'New Year Event']
  selectedEventType = '';
}

