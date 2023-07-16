import { Component } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { ButtonComponents } from '../../../widgets/btn-base.component';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';
import { WidgetYellowIcon } from '../../../widgets/yellow-icon.component';

@Component({
  selector: 'home-section-why-chose-us',
  standalone: true,
  template: `
    <section class="mt-8">
      <div class="container">
        <div class="flex flex-col justify-center items-center py-3 gap-2">
          <flower_widget
            title="Why chose us"
            titleClass="text-blue_primary-light text-4xl font-kissMe"
          ></flower_widget>
          <p class="text-blue_primary-dark_4 text-4xl">What you should know</p>
        </div>
        <div class="flex justify-around">
          <widget-yellow-icon
            iconSrc="/assets/images/icons/affordable_price.svg"
            iconTitle="Affordable price"
            iconDesc="Best service value for money and Accepting all cards."
          ></widget-yellow-icon>
          <widget-yellow-icon
            iconSrc="/assets/images/icons/professional_experts.svg"
            iconDesc="Academically and clinically well trained experts."
            iconTitle="Professional experts"
          ></widget-yellow-icon>
          <widget-yellow-icon
            iconSrc="/assets/images/icons/satisfactory_service.svg"
            iconDesc="A distinguished center in Egypt for all services"
            iconTitle="Satisfactory Service"
          ></widget-yellow-icon>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['../_home-style.scss'],
  imports: [
    FlowerWidget,
    ButtonComponents,
    ImageShadowEffectWidget,
    WidgetYellowIcon,
  ],
})
export class WhyChoseUs {
  aboutUsImage: string = '/assets/images/imgeTemp1.png';
  hoverTitle: string = 'Pure For Pure People';
  onKnowMoreClick() {}
}
