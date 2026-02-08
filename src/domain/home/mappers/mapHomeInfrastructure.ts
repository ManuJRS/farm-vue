import type {
  HomeInfrastructureItem,
  HomeInfrastructureSection,
} from '@/domain/home/models/HomeInfrastructureModel'

type AnyRecord = Record<string, any>

function Clean(Value: unknown): string {
  return String(Value ?? '').trim()
}

function ResolveImageUrl(Value: unknown): string {
  if (!Value) return ''
  if (typeof Value === 'string') return Value
  if (typeof Value === 'object' && Value.url) return Clean(Value.url)
  return ''
}

function ResolveImageAlt(Value: unknown): string {
  if (!Value) return ''
  if (typeof Value === 'object' && Value.alt) return Clean(Value.alt)
  return ''
}

function BuildItem(Items: AnyRecord, Index: 1 | 2 | 3): HomeInfrastructureItem {
  const Image = Items[`infrastructure_item${Index}_image`]

  return {
    Title: Clean(Items[`infrastructure_item${Index}_title`]),
    Description: Clean(Items[`infrastructure_item${Index}_description`]),
    ImageUrl: ResolveImageUrl(Image),
    ImageAlt: ResolveImageAlt(Image),
    BadgeText: Clean(Items[`infrastructure_item${Index}_badge_text`]),
    BadgeIcon: Clean(Items[`infrastructure_item${Index}_badge_icon`]) || 'check_circle',
  }
}

export function mapHomeInfrastructure(Acf: AnyRecord): HomeInfrastructureSection {
  const Items = (Acf.infrastructure_items ?? {}) as AnyRecord

  return {
    Eyebrow: Clean(Acf.infrastructure_eyebrow),
    Title: Clean(Acf.infrastructure_title),
    Description: Clean(Acf.infrastructure_description),
    Items: [BuildItem(Items, 1), BuildItem(Items, 2), BuildItem(Items, 3)],
  }
}
