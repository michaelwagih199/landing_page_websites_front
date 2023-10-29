import { Component, Input } from '@angular/core';
import { FlowerWidget } from '../../../widgets/flower-title.component';
import { ButtonComponents } from '../../../widgets/btn-base.component';
import { ImageShadowEffectWidget } from '../../../widgets/image-effect.component';
import { StayTuned } from 'src/app/website/models/home-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home-section-stay-tuned',
  standalone: true,
  template: `
    <section class="mt-8 bg-natural-blueWhite">
      <div class="container">
        <div class="flex flex-col gap-4 p-6 text-center md:flex-row md:text-left">
          <div class="flex flex-1 flex-col justify-center items-center gap-8 ">
            <flower_widget
              title="StayTuned"
              titleClass="text-blue_primary-light text-4xl font-flower"
            ></flower_widget>
            <h1 class="text-blue_primary-dark_4 text-4xl">
              Follow Us On Instagram
            </h1>
            <p class="text-xl text-natural-customGray">
              Whether you have five minutes to get out the door or an hour to
              play, these bestsellers are the key to fresh, healthy-looking
              skin.
            </p>
            <app-button
              btnStyle="bg-blue_primary-dark_4 text-lg hover:bg-accent active:text-blue_primary-dark_4 text-white py-2 w-36 px-2 rounded-full transition-colors duration-200"
              (btnClick)="onFollowUsClick()"
              btnTitle="Follow"
            ></app-button>
          </div>
          <ng-container *ngFor="let item of stayTone?.images; index as i">
            <image_shadow_effect_widget *ngIf="i==0"
                [imageSrc]="item"
                [hoverTitle]="hoverTitle"
                hoverTitleStyle="text-gray-50 text-base"
                [imageClass]="styles.style_0"
                class="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
              ></image_shadow_effect_widget>
            <image_shadow_effect_widget *ngIf="i==1"
                [imageSrc]="item"
                [hoverTitle]="hoverTitle"
                hoverTitleStyle="text-gray-50 text-base"
                [imageClass]="styles.style_1"
                class="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
              ></image_shadow_effect_widget>
            <image_shadow_effect_widget *ngIf="i==2"
                [imageSrc]="item"
                [hoverTitle]="hoverTitle"
                hoverTitleStyle="text-gray-50 text-base"
                [imageClass]="styles.style_2"
                class="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
              ></image_shadow_effect_widget>
          </ng-container>
        </div>
      </div>
    </section>
  `,
  imports: [FlowerWidget, ButtonComponents, CommonModule, ImageShadowEffectWidget],
})
export class StayTunedSection {
  @Input({ required: true }) stayTone: StayTuned | undefined;

  styles = {
    style_0: 'relative group h-[15rem] w-full',
    style_1: 'relative group h-[19.6875rem] w-full',
    style_2: 'relative group h-[15rem] w-full',
  }

  hoverTitle: string = 'Follow us';
  onFollowUsClick() { }
}
