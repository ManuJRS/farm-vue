import type { WPService } from '@/domain/services/type/serviceType'
import { ServiceModel } from '@/domain/services/models/ServiceModel'

const splitItems = (raw: unknown): string[] => {
  if (Array.isArray(raw)) return raw.map(String).filter(Boolean)
  if (typeof raw !== 'string') return []
  return raw
    .split(/\r?\n+/)
    .map((x) => x.trim())
    .filter(Boolean)
}

export const mapService = (wp: WPService): ServiceModel => {
  const acf = wp.acf ?? {}
  const accordions = acf.accordions ?? {}
  const form = acf.form ?? {}

  const title = acf.title || wp.title?.rendered || wp.slug || ''

  return new ServiceModel(
    [{ Label: 'Home', Href: '/' }, { Label: 'Services', Href: '/servicios' }, { Label: title }],
    title,
    acf.description || '',
    acf.svg || '',

    acf.stats_label_price || 'Price',
    acf.stats_label_delivery_time || 'Delivery Time',
    acf.stats_label_type || 'Sample Type',
    Number(acf.stats_value_price ?? 0),
    Number(acf.stats_value_delivery_time ?? 0),
    String(acf.stats_value_type ?? ''),

    accordions?.requirements?.title || 'Requirements',
    Boolean(accordions?.requirements?.open_by_default),
    splitItems(accordions?.requirements?.items),

    accordions?.post_study_care?.title || 'Post-study Care',
    Boolean(accordions?.post_study_care?.open_by_default),
    splitItems(accordions?.post_study_care?.items),

    accordions?.detailed_delivery_times?.title || 'Detailed Delivery Times',
    Boolean(accordions?.detailed_delivery_times?.open_by_default),
    splitItems(accordions?.detailed_delivery_times?.items),

    {
      Title: form.title || 'Request Service',
      Subtitle: form.subtitle || '',
      ServiceLabel: form.service_label || 'Service',
      SubmitLabel: form.submit_label || 'Request Service',
      SecureLabel: form.secure_label || 'Secure Professional Service',
    },
  )
}
