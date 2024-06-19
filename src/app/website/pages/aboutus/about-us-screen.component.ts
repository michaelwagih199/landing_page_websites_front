import { Component, OnInit, inject } from '@angular/core';
import { SpinnerComponent } from '../../../spinner.component';
import { CommonModule } from '@angular/common';
import { WidgetPageTitle } from '../../widgets/widget-page-title.component';
import { FlowerWidget } from '../../widgets/flower-title.component';
import { AppWidgetTeamMember } from '../../widgets/widget-team-member.component';
import { WhyChoseUsComponent } from '../home/sections/why-chose-us.component';
import { HomeService } from '../../service/home.service';
import { WhyChooseUs } from '../../models/home-model';
import { ButtonComponents } from '../../widgets/btn-base.component';
import { WidgetContactUsMessage } from "../../widgets/widget-contact-us-message.component";

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
   <section>
  <widget-page-title [widgetTitle]="pageTitle" [widgetImage]="heroImage"></widget-page-title>
  <div class="container">
    <p class="mt-8 text-blue_primary-dark_1 md:text-lg">
    ENLIGHT YOUR SKY clinic started its journey 7 years ago aiming at being the top notch beauty medical services provider in Egypt. Today, with its specialized team of consultants, doctors, nurses and a solid management team, it’s safe to say that ENLIGHT YOUR SKY clinic is the number one beauty clinic in Egypt.
    </p>

    <div class="mt-8 flex flex-col gap-4 md:flex-row-reverse md:justify-center md:items-center">
      <flower_widget title="Our Mission" titleClass="text-blue_primary-light text-3xl font-flower md:hidden" flowerClass="md:hidden"></flower_widget>
      <div class="relative w-[21.5625rem] md:flex-1">
        <div class="absolute w-full h-full bg-blue_primary-dark_1 opacity-10 rounded-md"></div>
        <div
          class="absolute  w-full h-full bg-gradient-to-r rounded-md from-[#4679B7] via-[#7F6ABB] to-[#00BDD0] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40 ">
        </div>
        <img class=" w-full rounded-lg object-cover" [src]="imge2" alt="" loading="lazy" />
      </div>
      <div class="md:flex-col md:flex-1 md:gap-8">
      <flower_widget title="Our Mission" titleClass="text-blue_primary-light text-3xl font-flower hidden md:block" flowerClass="hidden md:block"></flower_widget>
        <p class="mt-2 text-blue_primary-dark_1">
        integrated services and the latest technologies for skin and hair care and solutions to hair loss problems and filling the blanks to restore the luster and smoothness of hair and stop hair loss and intensification, as well as rejuvenation, softness, smoothness, and rejuvenation of the skin, hide scars and large pores and hair removal using effective laser all this under the supervision of a specialized and qualified medical team expertise
        </p>
        <app-button btnStyle="mt-9 bg-blue_primary-dark_1 text-lg hover:bg-blue_primary-hover active:text-blue_primary-light text-white font-semibold py-2 w-36 px-3 rounded-full transition-colors duration-200" (btnClick)="onOurServicesClick()" btnTitle="Our Services"></app-button>
      </div>
    </div>
    <div class="flex flex-col gap-3 mt-12 justify-center items-center">
      <flower_widget class="" title="Our Team" titleClass="text-blue_primary-light text-3xl font-flower">
      </flower_widget>
      <h1 class="text-blue_primary-dark_1 text-2xl md:text-4xl">
        Get to know us closer
      </h1>
      <div class="container flex overflow-x-auto gap-4 h-72">
        <app-widget-team-member [widgetImage]="imge1" widgetTitle="dr. shaimaa hasan"
          widgetJopTitle=""></app-widget-team-member>
        <app-widget-team-member [widgetImage]="imge1" widgetTitle="dr. shaimaa hasan"
          widgetJopTitle=""></app-widget-team-member>
        <app-widget-team-member [widgetImage]="imge1" widgetTitle="dr. shaimaa hasan"
          widgetJopTitle=""></app-widget-team-member>
        <app-widget-team-member [widgetImage]="imge1" widgetTitle="dr. shaimaa hasan"
          widgetJopTitle=""></app-widget-team-member>
      </div>
    </div>
    <home-section-why-chose-us [whyChoseUs]="whyChooseUs"></home-section-why-chose-us>
  </div>
  <widget-contact-us-message></widget-contact-us-message>
  <app-spinner [isLoading]="isLoading"></app-spinner>
</section>

  `,
    styleUrls: ['./_about-us-style.scss'],
    imports: [
        CommonModule,
        SpinnerComponent,
        WidgetPageTitle,
        AppWidgetTeamMember,
        FlowerWidget,
        WhyChoseUsComponent,
        ButtonComponents,
        WidgetContactUsMessage
    ]
})
export class AboutUsScreenComponents implements OnInit {
  isLoading: boolean = true;
  pageTitle: string = 'About us';
  imge1 = '/assets/images/team2.png';
  imge2 = '/assets/images/about-mission.jpeg';
  heroImage = '/assets/images/heroScreens.jpeg'
  private homeService = inject(HomeService);
  whyChooseUs!: WhyChooseUs;

  ngOnInit(): void {
    this.homeService.getHomeItem().subscribe((data) => {
      if (data.statusCode === 200) {
        this.whyChooseUs = data.data.home.whyChooseUs;
      }
      this.isLoading = false;
    });
  }

  onOurServicesClick() {}
}
