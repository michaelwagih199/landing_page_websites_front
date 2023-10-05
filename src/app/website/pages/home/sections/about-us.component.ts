import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { ButtonComponents } from '../../../widgets/btn-base.component';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';
import { Observable } from 'rxjs';
import { AboutUsModel, Home } from 'src/app/website/models/home-model';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
    <section class="mt-4 md:mt-8">
      <div
        class="container flex flex-col justify-start items-center  gap-8 p-8 text-center md:flex-row md:gap-32 md:text-start"
      >
        <image_shadow_effect_widget
          [imageSrc]="aboutUs?.image"
          [hoverTitle]="hoverTitle"
          imageClass="relative group h-[29rem] md:w-[32rem]"
          class="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
        ></image_shadow_effect_widget>

        <div class="flex flex-col items-center gap-2 md:gap-8 ">
          <flower_widget
            titleClass="text-blue_primary-light text-4xl font-kissMe"
          ></flower_widget>

          <h1 class="text-blue_primary-dark_4 text-2xl md:text-4xl">
            {{aboutUs?.header}}
          </h1>
          <p class="text-base text-natural-customGray md:text-2xl">
            {{aboutUs?.desc}}
          </p>
          <app-button
            btnStyle="bg-blue_primary-dark_4 text-lg hover:bg-accent active:text-blue_primary-dark_4 text-white py-2 w-36 px-2 rounded-full transition-colors duration-200"
            (btnClick)="onKnowMoreClick()"
            btnTitle="Know More"
          ></app-button>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
  imports: [FlowerWidget, ButtonComponents, ImageShadowEffectWidget],
})
export class AboutUs {

  @Input({ required: true }) aboutUs: AboutUsModel | undefined;

  hoverTitle: string = 'Pure For Pure People';


  onKnowMoreClick() { }
}
