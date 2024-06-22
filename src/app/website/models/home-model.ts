export interface HomeDataLake {
  home: Home
}

export interface Home {
  hero: Hero
  aboutUs: AboutUsModel
  whyChooseUs: WhyChooseUs
  makeSpecialEvents: Makespecialevents
  footerAndPublicInfo: FooterAndPublicInfo,
  servicesAndEvents: ServicesAndEvents
}

export interface Hero {
  header: string
  desc: string
  heroImage: string
}

export interface AboutUsModel {
  image: string
  header: string
  desc: string
}

export interface WhyChooseUs {
  image: string
  header: string
  desc: string
}

export interface ServicesAndEvents {
  header: string,
  titleEvent: string,
  cards: Card[]
}

export interface Card {
  title: string
  desc: string,
  cardCover:string
}

export interface Makespecialevents {
  image: string
  header: string
  desc: string
}

export interface Card2 {
  icon: string
  title: string
  desc: string
  rate: number
}

export interface StayTuned {
  title: string
  desc: string
  images: string[]
}

export interface FooterAndPublicInfo {
  desc: string
  featuresIcons: FeaturesIcon[]
  homeMenu: string[]
  contacts: Contacts
}

export interface FeaturesIcon { }

export interface Contacts {
  address: Address
  email: Email
  phones: Phones
}

export interface Address { }

export interface Email { }

export interface Phones {
  info: string[]
}
