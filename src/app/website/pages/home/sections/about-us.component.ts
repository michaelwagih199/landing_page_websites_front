import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { ButtonComponents } from '../../../widgets/btn-base.component';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';
import { Observable } from 'rxjs';
import { AboutUsModel, Home } from 'src/app/website/models/home-model';
import { WidgetBaseCircularImage } from "../../../widgets/widget-base-circular-image.component";

@Component({
    selector: 'app-about-us-home-section',
    standalone: true,
    template: `
    <section class="mt-12 md:mt-24">
      <div
        class="container flex flex-col justify-start items-center gap-8 p-8 text-center md:flex-row-reverse md:gap-32 md:text-start"
      >
        <div class="flex flex-col gap-4 items-center md:gap-8  md:items-start">
          <flower_widget title = "About Us"
            titleClass="text-blue_primary-light text-4xl font-flower"
          ></flower_widget>

          <h1 class="text-blue_primary-dark_1 text-3xl md:text-4xl">
            {{aboutUs?.header}}
          </h1>
          <p class="text-base text-blue_primary-dark_1 md:text-2xl">
            {{aboutUs?.desc}}
          </p>
        </div>
        <widget-base-circular-image
       class="mt-3"
       widgetImageClass="absolute w-[13.0125rem] h-[13.0125rem] rounded-full object-cover"
       [widgetImage]="aboutUs?.image"
     ></widget-base-circular-image>
      </div>
    </section>
  `,
    styleUrls: ['../_home-style.scss'],
    imports: [FlowerWidget, ButtonComponents, ImageShadowEffectWidget, WidgetBaseCircularImage]
})
export class AboutUsHomeSection {

  @Input({ required: true }) aboutUs: AboutUsModel | undefined;
  hoverTitle: string = 'Pure For Pure People';
  onKnowMoreClick() { }
}
