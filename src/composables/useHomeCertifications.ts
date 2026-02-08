import { onMounted, ref } from 'vue'
import { GetInicioPage } from '@/api/homeService'
import { mapHomeCertifications } from '@/domain/home/mappers/mapHomeCertification'
import type { HomeCertificationsSection } from '@/domain/home/models/HomeCertificationModel'

export function useHomeCertifications() {
  const Data = ref<HomeCertificationsSection | null>(null)
  const IsLoading = ref(true)
  const ErrorMessage = ref<string | null>(null)

  async function Load() {
    try {
      IsLoading.value = true
      ErrorMessage.value = null

      const Page = await GetInicioPage()
      Data.value = mapHomeCertifications(Page.acf)
    } catch {
      Data.value = null
      ErrorMessage.value = 'No se pudo cargar la sección de certificaciones.'
    } finally {
      IsLoading.value = false
    }
  }

  onMounted(Load)

  return { Data, IsLoading, ErrorMessage, Reload: Load }
}
