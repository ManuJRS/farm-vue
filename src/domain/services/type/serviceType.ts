export type WPService = {
  id: number
  slug: string
  title?: { rendered?: string }
  svg?: string
  acf?: {
    title?: string
    description?: string

    stats_label_price?: string
    stats_value_price?: number

    stats_label_delivery_time?: string
    stats_value_delivery_time?: number

    stats_label_type?: string
    stats_value_type?: string

    accordions?: {
      requirements?: { title?: string; open_by_default?: boolean; items?: string }
      post_study_care?: { title?: string; open_by_default?: boolean; items?: string }
      detailed_delivery_times?: { title?: string; open_by_default?: boolean; items?: string }
    }

    form?: {
      title?: string
      subtitle?: string
      service_label?: string
      submit_label?: string
      secure_label?: string
    }
  }
}
