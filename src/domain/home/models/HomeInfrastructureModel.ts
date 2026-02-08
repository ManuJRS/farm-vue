export interface HomeInfrastructureItem {
  Title: string
  Description: string
  ImageUrl: string
  ImageAlt: string
  BadgeText: string
  BadgeIcon: string
}

export interface HomeInfrastructureSection {
  Eyebrow: string
  Title: string
  Description: string
  Items: HomeInfrastructureItem[]
}
