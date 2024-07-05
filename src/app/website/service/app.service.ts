import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppResponse } from 'src/app/app-response';
import { HomeDataLake } from '../models/home-model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  getHomeItem(): HomeDataLake {
    return {
      home: {
        hero: {
          header: 'Deliciously Delivered, Perfectly Catered',
          desc: 'Experience culinary excellence with our bespoke catering services. Perfect for any occasion, we deliver unforgettable flavors and exceptional service.',
          heroImage: '/assets/images/home_hero_image.png',
        },
        aboutUs: {
          header: 'About Us',
          desc: "At Ebaid Catering, we believe that food is more than just sustenance; it’s an experience that brings people together. Founded in 2014, our journey began with a simple vision: to create memorable culinary experiences that delight the senses and celebrate life's special moments.",
          image: '/assets/images/home_about_us_image.png',
        },
        whyChooseUs: {
          header: 'Why you choose us',
          desc: 'At Ebaid Catering, we deliver exceptional culinary experiences with customizable menus crafted from the freshest, highest-quality ingredients. Our passionate chefs and professional staff ensure seamless events, paying meticulous attention to detail. We prioritize sustainability by sourcing locally and organically, reflecting our commitment to the environment. Our reliability, flexibility, and competitive pricing offer outstanding value. Trusted by satisfied clients, we make your event unforgettable.',
          image: '/assets/images/home_why_choose_us.png',
        },
        makeSpecialEvents: {
          header: 'Make special events',
          desc: 'Experience culinary excellence with our bespoke catering services. Perfect for any occasion, we deliver unforgettable flavors crafted from the freshest ingredients. Our professional staff ensures exceptional service, making every event seamless, elegant, and memorable.',
          image: '/assets/images/home_special_events.png',
        },
        servicesAndEvents: {
          cards: [
            {
              title: 'Birthdays',
              desc: 'Celebrate your special day with our tailored birthday catering.',
              cardCover: '/assets/images/serviceCardBirthday.jpeg',
            },
            {
              title: 'Weddings',
              desc: 'Make your wedding unforgettable with our elegant catering.',
              cardCover: '/assets/images/serviceCardWedding.jpeg',
            },
            {
              title: 'Special Events',
              desc: 'Elevate any occasion with our gourmet catering crafted for your unique event.',
              cardCover: '/assets/images/serviceCardsSpecialEvents.jpeg',
            },
            {
              title: 'New Year’s Eve',
              desc: 'Ring in the New Year with a lavish feast curated by our expert chefs.',
              cardCover: '/assets/images/serviceCardnewYear.jpeg',
            },
            {
              title: 'Fit & Fun Fair',
              desc: '',
              cardCover: '/assets/images/serviceCard2.jpeg',
            },
            {
              title: 'Brew & BBQ Bash',
              desc: '',
              cardCover: '/assets/images/serviceCard5.jpeg',
            },
          ],
          header: 'We also offer unique services for your events',
          titleEvent: 'View All',
        },
        ourTeam: {
          cards: [
            {
              title: 'John Bennett',
              desc: 'Pastry Chef',
              cardCover: '/assets/images/team1.jpeg',
            },
            {
              title: 'Daniel Smith',
              desc: 'Line Cook',
              cardCover: '/assets/images/team2.jpeg',
            },
            {
              title: 'Emily Johnson',
              desc: 'Prep Cook',
              cardCover: '/assets/images/team3.jpeg',
            },
            {
              title: 'James Wilson',
              desc: 'Line Cook',
              cardCover: '/assets/images/team4.jpeg',
            }
          ],
          header: 'We also offer unique services for your events',
        },
        footerAndPublicInfo: {
          contacts: { address: '', email: '', phones: { info: [] } },
          desc: '',
          featuresIcons: [],
          homeMenu: [],
        },
      },
    };
  }
}
