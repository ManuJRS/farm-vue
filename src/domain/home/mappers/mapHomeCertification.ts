import type {
  HomeCertificationsSection,
  HomeCertificationItem,
} from '@/domain/home/models/HomeCertificationModel'

type AnyRecord = Record<string, any>

function Clean(Value: unknown): string {
  return String(Value ?? '').trim()
}

function BuildItem(Items: AnyRecord, Index: 1 | 2 | 3): HomeCertificationItem {
  return {
    Title: Clean(Items[`certifications_item${Index}_title`]),
    Description: Clean(Items[`certifications_item${Index}_description`]),
    Icon: Clean(Items[`certifications_item${Index}_icon`]),
  }
}

export function mapHomeCertifications(Acf: AnyRecord): HomeCertificationsSection {
  const Items = (Acf.items ?? {}) as AnyRecord

  return {
    Eyebrow: Clean(Acf.certifications_eyebrow),
    Title: Clean(Acf.certifications_title),
    Description: Clean(Acf.certifications_description),
    Items: [BuildItem(Items, 1), BuildItem(Items, 2), BuildItem(Items, 3)],
  }
}
