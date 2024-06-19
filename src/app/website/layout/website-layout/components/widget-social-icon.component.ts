import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-social-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-4 mr-6 fixed right-0  bottom-1/2">
      <div
        class="flex justify-center items-center w-11 h-11 bg-blue_primary-dark_1 rounded-full hover:bg-blue_primary-hover active:bg-opacity-50 cursor-pointer transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.19776 21.5H13.1978V13.49H16.8018L17.1978 9.51H13.1978V7.5C13.1978 7.23478 13.3031 6.98043 13.4907 6.79289C13.6782 6.60536 13.9325 6.5 14.1978 6.5H17.1978V2.5H14.1978C12.8717 2.5 11.5999 3.02678 10.6622 3.96447C9.72454 4.90215 9.19776 6.17392 9.19776 7.5V9.51H7.19776L6.80176 13.49H9.19776V21.5Z"
            fill="white"
          />
        </svg>
      </div>
      <div
      class="flex justify-center items-center w-11 h-11 bg-blue_primary-dark_1 rounded-full hover:bg-blue_primary-hover active:bg-opacity-50 cursor-pointer transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0C4.477 0 0 4.477 0 10C0 11.89 0.525 13.66 1.438 15.168L0.546 18.2C0.494785 18.3741 0.491415 18.5587 0.536244 18.7346C0.581074 18.9104 0.672448 19.0709 0.800759 19.1992C0.929071 19.3275 1.08958 19.4189 1.26542 19.4637C1.44125 19.5086 1.62592 19.5052 1.8 19.454L4.832 18.562C6.39068 19.5051 8.17822 20.0025 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM7.738 12.263C9.761 14.285 11.692 14.552 12.374 14.577C13.411 14.615 14.421 13.823 14.814 12.904C14.8636 12.7897 14.8816 12.6641 14.8661 12.5405C14.8507 12.4168 14.8023 12.2996 14.726 12.201C14.178 11.501 13.437 10.998 12.713 10.498C12.5618 10.3935 12.3761 10.3515 12.1947 10.381C12.0133 10.4105 11.8503 10.509 11.74 10.656L11.14 11.571C11.1085 11.6202 11.0593 11.6555 11.0026 11.6696C10.9459 11.6837 10.8859 11.6756 10.835 11.647C10.428 11.414 9.835 11.018 9.409 10.592C8.983 10.166 8.611 9.6 8.402 9.219C8.37609 9.17059 8.3686 9.11443 8.38091 9.06093C8.39323 9.00742 8.42453 8.9602 8.469 8.928L9.393 8.242C9.52487 8.12734 9.60996 7.96819 9.63209 7.79486C9.65422 7.62152 9.61183 7.4461 9.513 7.302C9.065 6.646 8.543 5.812 7.786 5.259C7.68831 5.1882 7.57386 5.14406 7.45393 5.13091C7.334 5.11776 7.21271 5.13605 7.102 5.184C6.182 5.578 5.386 6.588 5.424 7.627C5.449 8.309 5.716 10.24 7.738 12.263Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
})

//WidgetPageTitle
export class WidgetSocialIcon {}
