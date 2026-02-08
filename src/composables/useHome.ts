import { ref, onMounted } from 'vue'
import { GetInicioPage } from '@/api/homeService'
import { mapHomeHero } from '@/domain/home/mappers/mapHomeHero'
import { mapHomeCertifications } from '@/domain/home/mappers/mapHomeCertification'
import { mapHomeInfrastructure } from '@/domain/home/mappers/mapHomeInfrastructure'
import type { HomeCertificationsSection } from '@/domain/home/models/HomeCertificationModel'
import type { HomeHero } from '@/domain/home/models/HomeHeroModel'
import type { HomeInfrastructureSection } from '@/domain/home/models/HomeInfrastructureModel'

export function useHome() {
  const Data = ref<HomeCertificationsSection | null>(null)
  const Infrastructure = ref<HomeInfrastructureSection | null>(null)
  const Hero = ref<HomeHero | null>(null)
  const IsLoading = ref(true)
  const ErrorMessage = ref<string | null>(null)

  async function load() {
    try {
      IsLoading.value = true
      ErrorMessage.value = null

      const Page = await GetInicioPage()
      Hero.value = mapHomeHero(Page.acf)
      Data.value = mapHomeCertifications(Page.acf)
      Infrastructure.value = mapHomeInfrastructure(Page.acf)
    } catch {
      Hero.value = null
      Data.value = null
      Infrastructure.value = null
      ErrorMessage.value = 'No se pudo cargar la información desde WordPress.'
    } finally {
      IsLoading.value = false
    }
  }

  onMounted(load)

  return {
    Data,
    Infrastructure,
    Hero,
    IsLoading,
    ErrorMessage,
    Reload: load,
  }
}
