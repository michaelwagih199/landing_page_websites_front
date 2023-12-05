import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-widget-team-member',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative flex flex-col items-center justify-center w-[16.07194rem] h-fit md:w-[17.875rem]">
    <div
          class="absolute  w-full h-full bg-gradient-to-r rounded-md from-[#4679B7] via-[#7F6ABB] to-[#00BDD0] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40 ">
        </div>
    <img class="rounded-tr-md rounded-lg  object-cover" [src]="widgetImage" alt="" srcset="">
    <div class="absolute -bottom-4 bg-natural-customGrayLight flex flex-col justify-center items-center rounded-lg shadow-md w-[14.27581rem] h-[3.52575rem] md:-bottom-4 ">
      <h1 class="text-xl text-blue_primary-dark_4 mt-1 self-center">{{widgetTitle}}</h1>
      <p class="text-sm text-black">{{widgetJopTitle}}</p>
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
