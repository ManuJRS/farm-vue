import { ref, watchEffect } from 'vue'
import { GetServicePage } from '@/api/GetServicePage'
import { mapService } from '@/domain/services/mappers/mapServiceDetail'
import { ServiceModel } from '@/domain/services/models/ServiceModel'

export const useService = (slug: () => string) => {
  const isLoading = ref(true)
  const error = ref<string | null>(null)
  const service = ref<ServiceModel>(ServiceModel.empty())

  let requestId = 0

  watchEffect(async () => {
    const currentSlug = slug()
    if (!currentSlug) return

    const myId = ++requestId
    isLoading.value = true
    error.value = null

    try {
      const wp = await GetServicePage.bySlug(currentSlug)
      if (myId !== requestId) return // evita race condition
      service.value = mapService(wp)
    } catch (e: any) {
      if (myId !== requestId) return
      error.value = e?.message ?? 'Error desconocido'
      service.value = ServiceModel.empty()
    } finally {
      if (myId === requestId) isLoading.value = false
    }
  })

  return { service, isLoading, error }
}
