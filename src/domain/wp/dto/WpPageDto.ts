export type WpMediaDto = {
  url: string
  alt: string
  sizes?: Record<string, string | number>
}

export type WpInicioAcfDto = {
  herotag: string
  herotitle: string
  herosubtitle: string
  heroimage: WpMediaDto
  heroctatext: string
  heroctalink: string
  herospan: {
    herospanone: string
    herospantwo: string
    herospanthree: string
  }
}

export type WpPageDto = {
  id: number
  slug: string
  acf: WpInicioAcfDto
}
