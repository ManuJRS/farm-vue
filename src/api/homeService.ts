import { http } from '@/api/http'

export type WpInicioPageDto = {
  id: number
  slug: string
  acf: Record<string, any>
}

export async function GetInicioPage(): Promise<WpInicioPageDto> {
  const Response = await http.get<WpInicioPageDto[]>('/wp-json/wp/v2/pages', {
    params: { slug: 'inicio', acf_format: 'standard' },
  })

  const Page = Response.data?.[0]
  if (!Page) throw new Error("No se encontró la página 'inicio'.")

  return Page
}
