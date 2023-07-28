import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponents } from "../../widgets/btn-base.component";
import { STYLES } from 'src/app/utils/constants';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'responsive-nav',
    standalone: true,
    template: `
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue_primary-light h-20">
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between rounded-sm">
        <div
          class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"
        >
        <div>
          <a href="/">
            <img class="w-20 h-auto" src="/assets/images/logo.png" alt="Enlight" />
          </a>
        </div>

          <button
            class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            (click)="toggleNavbar()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          [ngClass]="{ hidden: !showMenu, flex: showMenu }"
          class=" flex bg-blue_primary-light w-10/12 m-auto items-center rounded text-lg p-3 lg:flex lg:flex-grow md:justify-end lg:text-lg ">
          <ul class="flex flex-col gap-3 list-none items-center text-white lg:flex-row lg:gap-4 lg:ml-auto  ">
            <li>
            <a
              href="#"
              class=" hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >Home</a
            >
            </li>
            <li>
            <a
              href="#"
              class=" hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >About</a
            >
            </li>
            <li>
            <a
              href="#"
              class=" hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >Services</a
            >
            </li>
            <li>
            <a
              href="#"
              class="  hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >Contact</a
            >
            </li>
            <app-button
            (btnClick)="onOrderClick()"
            btnTitle="Order Now"
            [btnStyle]="btnWhite"
          ></app-button>
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
    imports: [CommonModule,RouterModule, ButtonComponents]
})
export class NaveNew {
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  onOrderClick() {
    alert('Hello There');
  }
  btnWhite = STYLES.btnWhite;
}
