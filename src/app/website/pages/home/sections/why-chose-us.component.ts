import { Component, Input } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { ButtonComponents } from '../../../widgets/btn-base.component';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';
import { WidgetYellowIcon } from '../../../widgets/yellow-icon.component';
import { WhyChooseUs } from 'src/app/website/models/home-model';

@Component({
  selector: 'home-section-why-chose-us',
  standalone: true,
  template: `
    <section class="mt-12 md:mt-24">
      <div class="container">
        <div class="flex flex-col justify-center items-center py-3 gap-4">
          <flower_widget
            title="Why choose Us"
            titleClass="text-blue_primary-light text-4xl font-flower"
          ></flower_widget>
          <p class="text-blue_primary-dark_1 text-3xl mx-2 text-center md:text-4xl">{{whyChoseUs?.title}}</p>
        </div>
        <div class="flex flex-col items-center gap-7 mt-8 justify-around md:flex-row">
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
export class WhyChoseUsComponent {

  @Input({ required: true }) whyChoseUs: WhyChooseUs | undefined;

  onKnowMoreClick() {}
}
