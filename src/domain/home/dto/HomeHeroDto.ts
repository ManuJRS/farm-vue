export type HomeInfrastructureCardDto = {
  Title: string
  Description: string
  Feature: string
  ImageUrl: string
  ImageAlt: string
}

export type HomeInfrastructureSectionDto = {
  Eyebrow: string
  Title: string
  Description: string
  Cards: HomeInfrastructureCardDto[]
}
