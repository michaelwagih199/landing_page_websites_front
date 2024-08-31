import { HomeDataLake } from "../models/home-model";
import { CateringMenus } from "../models/menus-model";

export const CATERING_MENUS: CateringMenus = {
  menus: [
    {
      title: "Wedding",
      menusCards: [
        {
          id:"f47ac10b-58cc-4372-a66c-5903c05c3403",
          title: "Appetizers & Hors d'oeuvres",
          desc: "E.g. Canapés, bruschetta, mini quiches, shrimp cocktail.",
          cardCover: "/assets/images/menus/abtizer.jpeg",
          pdfPath: "assets/files/menue-temp.pdf"
        },
        {
          id:"84f7626-d1f2-498e-831d-0974839c561f",
          title: "Salads",
          desc: "E.g. Caesar salad, garden salad, Greek salad, Caprese salad.",
          cardCover: "/assets/images/menus/soubs.jpeg",
          pdfPath: "assets/files/menue-temp.pdf"
        },
        {
          id:"a2b0fc05-97e4-418b-9c03-248f9a73c21b",
          title: "Main Courses (Entrées)",
          desc: "E.g. Grilled salmon, roast beef, chicken Marsala, vegetarian lasagna.",
          cardCover: "/assets/images/menus/main-deshes.jpeg",
          pdfPath: "/assets/menus/pp.pdf"
        },
        {
          id:"6c52389b-1f7d-492e-846d-a192c38f5623",
          title: "Side Dishes",
          desc: "E.g. Garlic mashed potatoes, roasted vegetables, wild rice pilaf.",
          cardCover: "/assets/images/menus/side-dishes.jpeg",
          pdfPath: "/assets/menus/pp.pdf"
        },
        {
          id:"9f3c571a-2e6d-418c-831b-0974839c561f",
          title: "Bread & Rolls",
          desc: "E.g. Dinner rolls, baguettes, cornbread, focaccia.",
          cardCover: "/assets/images/menus/breads.jpeg",
          pdfPath: "/assets/menus/pp.pdf"
        },
        {
          id:"d84f7626-d1f2-498e-831d-0974839c561f",
          title: "Desserts",
          desc: "E.g. Wedding cake, chocolate mousse, fruit tarts, mini cheesecakes.",
          cardCover: "/assets/images/menus/deserts.jpeg",
          pdfPath: "/assets/menus/pp.pdf"
        },
        {
          id:"52b0fc05-97e4-418b-9c03-248f9a73c21b",
          title: "Beverages",
          desc: "E.g. Cocktails, non-alcoholic options (lemonade, iced tea, sparkling water).",
          cardCover: "/assets/images/menus/beverages.jpeg",
          pdfPath: "assets/files/menue-temp.pdf"
        }
      ],
    },
    {
      title: "BirthDay",
      menusCards: [],
    },
  ]
}

export const HOME_DATA: HomeDataLake = {
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
    menus: {
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
    footerAndPublicInfo: {
      contacts: { address: '', email: '', phones: { info: [] } },
      desc: '',
      featuresIcons: [],
      homeMenu: [],
    },
  },
}
