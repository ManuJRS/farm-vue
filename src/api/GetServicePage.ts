import { http } from '@/api/http'
import type { WPService } from '@/domain/services/type/serviceType'

export class GetServicePage {
  static async bySlug(slug: string): Promise<WPService> {
    const { data } = await http.get<WPService[]>('/wp-json/wp/v2/service', {
      params: {
        slug,
        acf_format: 'standard',
      },
    })

    const item = data?.[0]
    if (!item) throw new Error('Servicio no encontrado')

    return item
  }
}
