export interface HomeDataLake {
  home: Home
}

export interface Home {
  hero: Hero
  aboutUs: AboutUsModel
  whyChooseUs: WhyChooseUs
  testimonial: Testimonial
  stayTuned: StayTuned
  footerAndPublicInfo: FooterAndPublicInfo
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
  title: string
  cards: Card[]
}

export interface Card {
  title: string
  desc: string
}

export interface Testimonial {
  title: string
  cards: Card2[]
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

export interface FeaturesIcon {}

export interface Contacts {
  address: Address
  email: Email
  phones: Phones
}

export interface Address {}

export interface Email {}

export interface Phones {
  info: string[]
}
