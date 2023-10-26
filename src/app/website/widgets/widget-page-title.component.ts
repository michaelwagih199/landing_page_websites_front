import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'widget-page-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-title bg-neutral-200 flex items-center justify-center text-blue_primary-dark_4 text-4xl p-5">
    <p>{{widgetTitle}}</p>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})

//WidgetPageTitle
export class WidgetPageTitle {
  @Input({ required: true }) widgetTitle: string | undefined;
}
