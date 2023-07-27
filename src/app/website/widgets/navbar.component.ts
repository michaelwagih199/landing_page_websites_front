import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponents } from './btn-base.component';
import { STYLES } from 'src/app/utils/constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="bg-blue_primary-light h-20 ">
      <nav class="flex items-center justify-between mx-auto container h-full">
        <div>
          <a href="/">
            <img class="w-20 h-auto" src="/assets/images/logo.png" alt="Enlight" />
          </a>
        </div>
        <div class="flex items-center gap-2">
          <div class="text-white">
            <a
              href="#"
              class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >Home</a
            >
            <a
              href="#"
              class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >About</a
            >
            <a
              href="#"
              class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >Services</a
            >
            <a
              href="#"
              class="px-4 text-base hover:text-blue_primary-dark_3 active:text-blue_primary-dark_1 transition-colors duration-200 "
              >Contact</a
            >
          </div>
          <app-button
            (btnClick)="onOrderClick()"
            btnTitle="Order Now"
            [btnStyle]="btnWhite"
          ></app-button>
        </div>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./widget-style.scss'],
  imports: [CommonModule, RouterModule, ButtonComponents],
})
export class NavbarComponent {
  onOrderClick() {
    alert('Hello There');
  }
  btnWhite = STYLES.btnWhite;
}
