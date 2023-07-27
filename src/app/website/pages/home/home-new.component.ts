import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NaveNew } from './nav-new';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <responsive-nav></responsive-nav>
    <section
      class="flex flex-col text-center gap-8 m-2 md:flex-row md:items-center md:text-left sm:max-lg:bg-natural-blueWhite"
    >
      <div>
        <img
          class="w-full object-cover"
          src="/assets/images/imgeTemp1.png"
          alt=""
        />
      </div>
      <div>
        <h1 class="text-4xl mb-2 font-medium">Heading</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis sit
          sint ratione repellat numquam beatae cumque reprehenderit culpa nam
          vel id velit incidunt, sunt fugit molestiae neque a ex fuga.
        </p>
      </div>
    </section>
  `,
  imports: [CommonModule, NaveNew],
})
export class HomeNewComponent {}
