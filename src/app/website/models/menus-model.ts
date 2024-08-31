export interface CateringMenus {
  menus: Menu[]
}

export interface Menu {
  title: string
  menusCards: MenusCard[]
}

export interface MenusCard {
  id:string
  title: string
  desc: string
  cardCover: string
  pdfPath: string
}
