import { Component } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { ButtonComponents } from '../../../widgets/btn-base.component';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
    <section class="mt-4 md:mt-8">
      <div class="container flex flex-col justify-start items-center  gap-8 p-8 text-center md:flex-row md:gap-32 md:text-start">
        
        <image_shadow_effect_widget [imageSrc]="aboutUsImage" [hoverTitle]="hoverTitle"
          class="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
        ></image_shadow_effect_widget>

        <div class="flex flex-col items-center gap-2 md:gap-8 ">
          <flower_widget
            titleClass="text-blue_primary-light text-4xl font-kissMe"
          ></flower_widget>
          <h1 class="text-blue_primary-dark_4 text-2xl md:text-4xl">
            We Use Pure & Natural Ingredients
          </h1>
          <p class="text-base text-natural-customGray md:text-2xl">
            Mauris cursus posuere sem non fermentum donec condime ntum, nibh ut
            viverra molestie, urna dui convallis tortor, sed dignissim arcu ex
            sed mauris quisque at libero ac. Phasellus placerat feugiat ante,
            eget efficitur eros dapibus fusce a urna non dolor pellentesque
            consequat vitae felis.
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
  aboutUsImage: string = '/assets/images/imgeTemp1.png';
  hoverTitle: string = 'Pure For Pure People';
  onKnowMoreClick() {}
}
