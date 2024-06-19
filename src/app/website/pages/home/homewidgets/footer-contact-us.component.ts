import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'footer-contact-us-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col flex-1 gap-3 ">
      <h2 class=" text-xl app-underline app-underline__footer">
        {{ widgetTitle }}
      </h2>
      <div class="inline-flex gap-2">
        <svg
          class="hover:fill-blue_primary-hover active:fill-neutral-100 cursor-pointer transition-colors duration-200"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10V10Z"
            [attr.stroke]="widgetSvgStroke"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            [attr.stroke]="widgetSvgStroke"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>El-Sadat Rd, Al Obour, Cairo Governorate 6361460</p>
      </div>
      <div class="inline-flex gap-2">
        <svg
          class="hover:fill-blue_primary-hover active:fill-neutral-100 cursor-pointer transition-colors duration-200"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.9999 17.008V20.008C21.0022 20.5711 20.767 21.1091 20.352 21.4899C19.937 21.8706 19.3808 22.0587 18.8199 22.008C15.7428 21.6736 12.7869 20.6221 10.1899 18.938C7.77377 17.4027 5.72528 15.3542 4.18994 12.938C2.49992 10.3292 1.44818 7.35898 1.11994 4.26799C1.06941 3.70886 1.25621 3.15424 1.63471 2.73961C2.0132 2.32498 2.54853 2.08852 3.10994 2.08799H6.10994C7.1138 2.07811 7.96944 2.81396 8.10994 3.80799C8.23656 4.76806 8.47139 5.71072 8.80994 6.61799C9.08468 7.34886 8.90896 8.17279 8.35994 8.72799L7.08994 9.99799C8.5135 12.5015 10.5864 14.5744 13.0899 15.998L14.3599 14.728C14.9151 14.179 15.7391 14.0033 16.4699 14.278C17.3772 14.6165 18.3199 14.8514 19.2799 14.978C20.2855 15.1198 21.0251 15.9928 20.9999 17.008Z"
            [attr.stroke]="widgetSvgStroke"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>01066333321</p>
      </div>
      <div class="inline-flex gap-2">
        <svg
          class="hover:fill-blue_primary-hover active:fill-neutral-100 cursor-pointer transition-colors duration-200"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 4.08789H20C21.1 4.08789 22 4.98789 22 6.08789V18.0879C22 19.1879 21.1 20.0879 20 20.0879H4C2.9 20.0879 2 19.1879 2 18.0879V6.08789C2 4.98789 2.9 4.08789 4 4.08789Z"
            [attr.stroke]="widgetSvgStroke"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 6.08789L12 13.0879L2 6.08789"
            [attr.stroke]="widgetSvgStroke"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>enlightyourskysales@gmail.com</p>
      </div>

    </div>
  `,
  styleUrls: ['../_home-style.scss'],
})
export class FooterContactUsWidget {
  @Input() widgetTitle: any = `Contact Us`;
  @Input() widgetSvgStroke: any = '#fff';
}
