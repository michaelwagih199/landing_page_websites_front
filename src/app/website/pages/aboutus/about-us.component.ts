import { Component, OnInit } from '@angular/core';
import { SpinnerComponent } from '../../../spinner.component';
import { CommonModule } from '@angular/common';
import { WidgetPageTitle } from '../../widgets/widget-page-title.component';
import { FlowerWidget } from '../../widgets/flower-title.component';
import { AppWidgetTeamMember } from '../../widgets/widget-team-member.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <widget-page-title [widgetTitle]="pageTitle"></widget-page-title>
    <div class="container">
      <div class="flex flex-col mt-4 items-center">
        <flower_widget
          title="Our Team"
          titleClass="text-blue_primary-light text-4xl font-kissMe"
        ></flower_widget>
        <h1 class="text-blue_primary-dark_4 text-2xl">
          Follow Us On Instagram
        </h1>
        <div class="mt-2 flex flex-col gap-4 md:flex-row">
          <app-widget-team-member
            [widgetTitle]="pageTitle" widgetImage="/assets/images/team1.png" widgetJopTitle="Software Developer" >
          </app-widget-team-member>
          <app-widget-team-member
            widgetTitle="Jany Makl" [widgetImage]="imge1" widgetJopTitle="Software Developer" >
          </app-widget-team-member>
        </div>
        <section class="flex flex-col mt-4 items-center">
          <flower_widget
            title="Our Mission"
            titleClass="text-blue_primary-light text-4xl font-kissMe"
          ></flower_widget>

        </section>
        <section
          class="flex flex-col justify-center mt-8 bg-natural-customGrayLight w-full"
        >
          <img src="" alt="ddd" srcset="" />
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./_about-us-style.css'],
  imports: [
    CommonModule,
    SpinnerComponent,
    WidgetPageTitle,
    AppWidgetTeamMember,
    FlowerWidget,
  ],
})
export class AboutUsComponents implements OnInit {
  isLoading: boolean = false;
  pageTitle: string = 'About us';
  imge1 = '/assets/images/team2.png'
  ngOnInit(): void {
    //hrow new Error('Method not implemented.');
  }
}
