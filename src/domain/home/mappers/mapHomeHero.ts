import type { HomeHero } from '@/domain/home/models/HomeHeroModel'

type AnyRecord = Record<string, any>

export function mapHomeHero(acf: AnyRecord): HomeHero {
  return {
    Eyebrow: acf.herotag ?? '',
    Title: acf.herotitle ?? '',
    Description: acf.herosubtitle ?? '',
    BackgroundImageUrl: acf.heroimage?.url ?? '',
    PrimaryCtaText: acf.heroctatextleft ?? '',
    PrimaryCtaLink: acf.heroctalinkleft ?? '',
    SecondaryCtaText: acf.heroctatextright ?? '',
    SecondaryCtaLink: acf.heroctalinkright ?? '',
    Spans: [
      acf.herospan?.herospanone,
      acf.herospan?.herospantwo,
      acf.herospan?.herospanthree,
    ].filter(Boolean),
  }
}
