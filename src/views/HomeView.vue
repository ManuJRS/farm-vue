<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GetInicioPage } from '@/api/homeService'
import HeroSection from '@/components/hero/HeroSection.vue'
import InfrastructureSection from '@/components/home/InfrastructureSection.vue'
import CertificationsSection from '@/components/home/CertificationsSection.vue'
import { useHome } from '@/composables/useHome'

const { Data, Infrastructure, Hero, IsLoading, ErrorMessage } = useHome()

const Acf = ref<Record<string, any> | null>(null)

onMounted(async () => {
  const Page = await GetInicioPage()
  Acf.value = Page.acf
  console.log('ACF INICIO:', Page.acf)
})

function onPrimary() {
  if (Hero.value?.PrimaryCtaLink) {
    window.open(Hero.value.PrimaryCtaLink, '_blank', 'noopener,noreferrer')
  }
}

function onSecondary() {
  console.log('Secondary CTA')
  if (Hero.value?.SecondaryCtaLink) {
    window.open(Hero.value.SecondaryCtaLink, '_blank', 'noopener,noreferrer')
  }
}
</script>

<template>
  <div v-if="IsLoading" class="py-20 text-center opacity-70">Cargando...</div>

  <div v-else-if="ErrorMessage" class="py-20 text-center text-sm text-red-500">
    {{ ErrorMessage }}
  </div>

  <HeroSection
    v-else-if="Hero"
    :BackgroundImageUrl="Hero.BackgroundImageUrl"
    :Eyebrow="Hero.Eyebrow"
    :Title="Hero.Title"
    :Description="Hero.Description"
    :PrimaryCtaText="Hero.PrimaryCtaText"
    :SecondaryCtaText="Hero.SecondaryCtaText"
    @primary="onPrimary"
    @secondary="onSecondary"
  />

  <InfrastructureSection
    :Eyebrow="Infrastructure?.Eyebrow ?? ''"
    :Title="Infrastructure?.Title ?? ''"
    :Description="Infrastructure?.Description ?? ''"
    :Items="Infrastructure?.Items ?? []"
  />

  <CertificationsSection
    :Eyebrow="Data?.Eyebrow ?? ''"
    :Title="Data?.Title ?? ''"
    :Description="Data?.Description ?? ''"
    :Items="Data?.Items ?? []"
  />

  <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <pre class="text-xs whitespace-pre-wrap">{{ Acf }}</pre>
  </section>
</template>
