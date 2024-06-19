import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponents } from '../../../widgets/btn-base.component';
import { STYLES } from 'src/app/utils/constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'responsive-nav',
  standalone: true,
  template: `
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-3 h-20 mt-8"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between rounded-sm "
      >
        <div
          class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"
        >
          <div>
            <a href="/">
              <img
                class="w-20 h-auto"
                src="/assets/images/logo.png"
                alt="Enlight"
              />
            </a>
          </div>

          <button
            class="text-blue_primary-dark_1 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
          class="absolute right-0 top-20 z-10 flex bg-blue_primary-dark_1 h-screen w-1/2 font-semibold text-lg p-3 md:flex md:flex-grow md:justify-center md:text-lg  md:static md:h-auto md:bg-natural-white"
        >
          <div class="flex flex-col justify-between">
            <ul
              class="flex flex-col gap-3 list-none  text-white lg:flex-row lg:gap-4 lg:ml-auto md:text-blue_primary-dark_1 md:font-semibold md:hover:to-blue_primary-hover "
            >
              <li>
                <a
                  href="#"
                  class=" hover:text-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 "
                  >Home</a
                >
              </li>
              <li>
                <a
                  routerLink="/about-us"
                  routerLinkActive="active"
                  ariaCurrentWhenActive="page"
                  class=" hover:text-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 "
                  >About</a
                >
              </li>
              <li>
                <a
                  routerLink="/service-home"
                  routerLinkActive="active"
                  ariaCurrentWhenActive="page"
                  class=" hover:text-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 "
                  >Services</a
                >
              </li>
              <li>
                <a
                  routerLink="/contact-us"
                  routerLinkActive="active"
                  ariaCurrentWhenActive="page"
                  class="  hover:text-blue_primary-hover active:text-blue_primary-dark_1 transition-colors duration-200 "
                  >Contact</a
                >
              </li>
            </ul>
            <div class="flex gap-3 mb-32 items-center lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.1156 1.66669C8.46739 1.66669 6.85622 2.15543 5.48581 3.07111C4.1154 3.98679 3.0473 5.28827 2.41657 6.81099C1.78584 8.33371 1.62081 10.0093 1.94235 11.6258C2.2639 13.2423 3.05757 14.7271 4.22301 15.8926C5.38844 17.058 6.8733 17.8517 8.48981 18.1732C10.1063 18.4948 11.7819 18.3297 13.3046 17.699C14.8273 17.0683 16.1288 16.0002 17.0445 14.6298C17.9602 13.2594 18.4489 11.6482 18.4489 10C18.4489 8.90567 18.2333 7.82204 17.8146 6.81099C17.3958 5.79994 16.7819 4.88129 16.0081 4.10746C15.2343 3.33364 14.3156 2.71981 13.3046 2.30102C12.2935 1.88224 11.2099 1.66669 10.1156 1.66669ZM12.7656 14.2934C12.7345 14.3712 12.6871 14.4415 12.6265 14.4995C12.566 14.5575 12.4938 14.6019 12.4147 14.6297C12.3356 14.6575 12.2515 14.668 12.168 14.6606C12.0845 14.6532 12.0035 14.628 11.9306 14.5867L9.66806 12.8284L8.2164 14.1684C8.1827 14.1932 8.14329 14.2092 8.1018 14.2149C8.0603 14.2206 8.01804 14.2158 7.9789 14.2009L8.25723 11.71L8.26556 11.7175L8.2714 11.6684C8.2714 11.6684 12.3422 7.96169 12.5081 7.80419C12.6764 7.64669 12.6206 7.61252 12.6206 7.61252C12.6306 7.42085 12.3197 7.61252 12.3197 7.61252L6.92556 11.0825L4.67973 10.3175C4.67973 10.3175 4.33473 10.1942 4.30223 9.92169C4.26806 9.65169 4.69056 9.50502 4.69056 9.50502L13.6214 5.95669C13.6214 5.95669 14.3556 5.63002 14.3556 6.17169L12.7656 14.2934Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.91814 5.12741C6.77643 5.12741 5.04893 6.85492 5.04893 8.99662C5.04893 11.1383 6.77643 12.8658 8.91814 12.8658C11.0598 12.8658 12.7873 11.1383 12.7873 8.99662C12.7873 6.85492 11.0598 5.12741 8.91814 5.12741ZM8.91814 11.5121C7.53411 11.5121 6.40265 10.384 6.40265 8.99662C6.40265 7.60923 7.53074 6.48113 8.91814 6.48113C10.3055 6.48113 11.4336 7.60923 11.4336 8.99662C11.4336 10.384 10.3022 11.5121 8.91814 11.5121ZM13.8481 4.96914C13.8481 5.47089 13.444 5.87162 12.9456 5.87162C12.4439 5.87162 12.0431 5.46752 12.0431 4.96914C12.0431 4.47076 12.4472 4.06666 12.9456 4.06666C13.444 4.06666 13.8481 4.47076 13.8481 4.96914ZM16.4107 5.88509C16.3535 4.67617 16.0774 3.60532 15.1917 2.72305C14.3094 1.84077 13.2386 1.56464 12.0297 1.50403C10.7837 1.43331 7.0492 1.43331 5.80324 1.50403C4.59769 1.56127 3.52684 1.8374 2.6412 2.71968C1.75556 3.60195 1.48279 4.6728 1.42218 5.88172C1.35146 7.12768 1.35146 10.8622 1.42218 12.1081C1.47942 13.3171 1.75556 14.3879 2.6412 15.2702C3.52684 16.1525 4.59432 16.4286 5.80324 16.4892C7.0492 16.5599 10.7837 16.5599 12.0297 16.4892C13.2386 16.432 14.3094 16.1558 15.1917 15.2702C16.074 14.3879 16.3501 13.3171 16.4107 12.1081C16.4814 10.8622 16.4814 7.13105 16.4107 5.88509ZM14.8011 13.445C14.5384 14.105 14.0299 14.6135 13.3665 14.8796C12.3731 15.2736 10.0159 15.1826 8.91814 15.1826C7.82035 15.1826 5.45976 15.2702 4.46973 14.8796C3.8097 14.6169 3.30122 14.1084 3.03519 13.445C2.6412 12.4516 2.73212 10.0944 2.73212 8.99662C2.73212 7.89883 2.64456 5.53824 3.03519 4.54821C3.29785 3.88819 3.80634 3.3797 4.46973 3.11367C5.46313 2.71968 7.82035 2.8106 8.91814 2.8106C10.0159 2.8106 12.3765 2.72305 13.3665 3.11367C14.0266 3.37633 14.5351 3.88482 14.8011 4.54821C15.1951 5.54161 15.1042 7.89883 15.1042 8.99662C15.1042 10.0944 15.1951 12.455 14.8011 13.445Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M12.5012 1.4483H10.4323C9.51774 1.4483 8.64066 1.8116 7.99398 2.45828C7.3473 3.10496 6.984 3.98204 6.984 4.89658V6.96554H4.91504V9.72416H6.984V15.2414H9.74263V9.72416H11.8116L12.5012 6.96554H9.74263V4.89658C9.74263 4.71367 9.81529 4.53825 9.94462 4.40892C10.074 4.27958 10.2494 4.20692 10.4323 4.20692H12.5012V1.4483Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7.00001 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7.00001 14C5.76295 14.002 4.54767 13.6746 3.47901 13.0515L0.00280985 14L0.949209 10.5224C0.325575 9.45341 -0.00205686 8.23759 9.71617e-06 7C9.71617e-06 3.1339 3.13391 0 7.00001 0ZM4.61441 3.71L4.47441 3.7156C4.38377 3.72112 4.29519 3.74493 4.21401 3.7856C4.13807 3.8286 4.06875 3.88235 4.00821 3.9452C3.92421 4.0243 3.87661 4.0929 3.82551 4.1594C3.56659 4.49603 3.42719 4.90932 3.42931 5.334C3.43071 5.677 3.52031 6.0109 3.66031 6.3231C3.94661 6.9545 4.41771 7.62299 5.03931 8.24249C5.18911 8.39159 5.33611 8.54139 5.49431 8.68069C6.26668 9.36072 7.18708 9.85112 8.1823 10.1129L8.5799 10.1738C8.7094 10.1808 8.8389 10.171 8.9691 10.1647C9.17297 10.1542 9.37203 10.099 9.5522 10.003C9.64387 9.95578 9.73333 9.90439 9.8203 9.84899C9.8203 9.84899 9.8504 9.82939 9.9078 9.78599C10.0023 9.71599 10.0604 9.66629 10.1388 9.58439C10.1969 9.52419 10.2473 9.45349 10.2858 9.37299C10.3404 9.25889 10.395 9.04119 10.4174 8.85989C10.4342 8.72129 10.4293 8.64569 10.4272 8.59879C10.4244 8.52389 10.3621 8.44619 10.2942 8.41329L9.8868 8.23059C9.8868 8.23059 9.2778 7.96529 8.9054 7.79589C8.86644 7.77888 8.82468 7.76915 8.7822 7.76719C8.73431 7.76228 8.68592 7.76766 8.64028 7.783C8.59464 7.79833 8.55281 7.82326 8.5176 7.85609C8.5141 7.85469 8.4672 7.89459 7.9611 8.50779C7.93206 8.54683 7.89204 8.57633 7.84617 8.59253C7.80029 8.60874 7.75062 8.61092 7.7035 8.59879C7.6579 8.58657 7.61323 8.57113 7.5698 8.55259C7.483 8.51619 7.4529 8.50219 7.3934 8.47699C6.99165 8.30168 6.61969 8.0648 6.29091 7.77489C6.20271 7.69789 6.12081 7.61389 6.03681 7.53269C5.76142 7.26896 5.52141 6.9706 5.32281 6.6451L5.28151 6.5786C5.25184 6.53391 5.22786 6.48571 5.21011 6.4351C5.18351 6.3322 5.25281 6.2496 5.25281 6.2496C5.25281 6.2496 5.42291 6.0634 5.50201 5.9626C5.57901 5.8646 5.64411 5.7694 5.68611 5.7015C5.76871 5.5685 5.79461 5.432 5.75121 5.3263C5.55521 4.8475 5.35221 4.3708 5.14361 3.8976C5.10231 3.8038 4.97981 3.7366 4.86851 3.7233C4.83071 3.7191 4.79291 3.7149 4.75511 3.7121C4.6611 3.70743 4.5669 3.70836 4.47301 3.7149L4.61371 3.7093L4.61441 3.71Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <!-- phone -->
        <div class="hidden cursor-pointer md:flex md:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.7501 12.69V14.94C16.7518 15.3623 16.5754 15.7658 16.2641 16.0513C15.9529 16.3369 15.5357 16.478 15.1151 16.44C12.8072 16.1892 10.5903 15.4006 8.64258 14.1375C6.83045 12.9859 5.29408 11.4496 4.14258 9.63745C2.87506 7.68085 2.08626 5.4532 1.84008 3.13495C1.80218 2.71561 1.94228 2.29964 2.22615 1.98867C2.51002 1.67769 2.91152 1.50035 3.33258 1.49995H5.58258C6.33548 1.49254 6.9772 2.04443 7.08258 2.78995C7.17754 3.51 7.35366 4.217 7.60758 4.89745C7.81363 5.44561 7.68184 6.06356 7.27008 6.47995L6.31758 7.43245C7.38524 9.31011 8.93992 10.8648 10.8176 11.9325L11.7701 10.98C12.1865 10.5682 12.8044 10.4364 13.3526 10.6425C14.033 10.8964 14.74 11.0725 15.4601 11.1675C16.2142 11.2738 16.769 11.9285 16.7501 12.69Z"
              stroke="#4679BE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
         <h1 class="text-blue_primary-dark_1 font-semibold ">01066333321</h1>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  imports: [CommonModule, RouterModule, ButtonComponents],
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