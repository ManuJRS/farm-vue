import { httpNav } from '@/api/httpNav'

type WpRendered = {
  rendered: string
}

export interface NavServiceItemDto {
  id: number
  slug: string
  link: string
  title: WpRendered
}

export async function getNavServices(): Promise<NavServiceItemDto[]> {
  try {
    const { data } = await httpNav.get<NavServiceItemDto[]>('/service', {
      params: {
        per_page: 100,
        _fields: 'id,slug,title,link',
      },
    })

    return data
  } catch (error) {
    console.error('navService.getNavServices error:', error)
    return []
  }
}
