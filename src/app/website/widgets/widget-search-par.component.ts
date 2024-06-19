import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponents } from './btn-base.component';

@Component({
  selector: 'widget-search-par',
  standalone: true,
  template: `
    <div
      class="flex justify-between items-center  w-full shadow-lg rounded-full px-6 py-2 md:py-4"
    >
      <input
        placeholder="Search By name"
        class=" peer h-full w-full border-b border-blue-gray-200 bg-transparent mx-4 pt-4 pb-1 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-blue_primary-dark_1 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      />
      <svg
        class="cursor-pointer mt-1 md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M15 15L19 19M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z"
          stroke="#BCBCBC"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <app-button
        btnStyle="bg-blue_primary-dark_1 text-lg hover:bg-blue_primary-hover active:text-blue_primary-light text-white font-semibold py-2 w-36 px-3 rounded-full transition-colors duration-200 hidden md:block"
        (btnClick)="onSearchClick()"
        btnTitle="Search"
      ></app-button>
    </div>
  `,
  styleUrls: ['./widget-style.scss'],
  imports: [CommonModule, ButtonComponents],
})
export class WidgetSearchPar {
  // @Input({ required: true }) widgetImage: any = '';
  // @Input({ required: true }) widgetImageClass: any = ``;
  onSearchClick() {}
}
