import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-widget-team-member',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col items-center justify-center shadow-md m-auto rounded-md ">
    <img class="rounded-tr-md rounded-tl-md h-[12rem] w-[16rem] object-cover" [src]="widgetImage" alt="" srcset="">
    <div class="h-auto w-full bg-natural-customGrayLight flex flex-col p-2 rounded-tr-md ">
      <h1 class="text-xl text-blue_primary-dark_4 mt-1 self-center">{{widgetTitle}}</h1>
      <p class="text-sm text-natural-customGray">{{widgetJopTitle}}</p>
    </div>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})

//WidgetPageTitl
export class AppWidgetTeamMember {
  @Input({ required: true }) widgetTitle: string ='';
  @Input({ required: true }) widgetImage: string ='';
  @Input({ required: true }) widgetJopTitle: string ='';
}
