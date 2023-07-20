import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialSvgWidget } from '../homewidgets/footer-svg.component';
import { FooterImportantLinksWidget } from "../homewidgets/footer-important-links.component";
import { FooterQuickLinksWidget } from "../homewidgets/footer-quick-links.component";
import { FooterContactUsWidget } from "../homewidgets/footer-contact-us.component";

@Component({
    selector: 'footer-component',
    standalone: true,
    template: `
    <footer class="bg-blue_primary-dark_4 mt-8 p-9 text-white">
      <div class="container">
        <div class="flex gap-9">
          <div class="flex flex-col flex-1 gap-4">
            <a href="/">
              <img
                class="w-28 h-auto"
                src="/assets/images/logo.png"
                alt="Enlight"
              />
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <social-svg-widget></social-svg-widget>
          </div>
          <footer-important-links-widget></footer-important-links-widget>
          <footer-quick-links-widget></footer-quick-links-widget>
          <footer-contact-us-widget></footer-contact-us-widget>
        </div>
        <!--end Flex-->
        <div
          class="flex justify-center mt-4 border-t-[0.063rem] p-2 items-center"
        >
          <p class="justify-self-center text-natural-customGray">All copyrights are reserved © 2023</p>
        </div>
      </div>
      <!-- end Container -->
    </footer>
  `,
    styleUrls: ['../_home-style.scss'],
    imports: [CommonModule, SocialSvgWidget, FooterImportantLinksWidget, FooterQuickLinksWidget, FooterContactUsWidget]
})
export class FooterComponent {
  @Input() btnStyle: string = '';
  @Output() btnClick = new EventEmitter();
}
