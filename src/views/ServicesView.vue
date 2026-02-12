<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'

type WPServiceListItem = {
  id: number
  slug: string
  title: { rendered: string }
  acf?: {
    title?: string
    description?: string
    stats_value_price?: number
    svg_for_preview?:
      | {
          url?: string
        }
      | string
  }
}

const isLoading = ref(true)
const error = ref<string | null>(null)
const services = ref<WPServiceListItem[]>([])

onMounted(async () => {
  try {
    const res = await fetch(
      'http://localhost:8080/wp-json/wp/v2/service?per_page=100&acf_format=standard',
    )
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    services.value = await res.json()
  } catch (e: any) {
    error.value = e?.message ?? 'Error'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 md:px-20 pt-16 pb-12">
    <div class="max-w-3xl">
      <span class="text-primary font-bold tracking-widest text-xs uppercase mb-3 block"
        >Scientific Rigor &amp; Trust</span
      >
      <h1
        class="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6"
      >
        Advanced Diagnostic &amp; Pharmaceutical Laboratory Services
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
        We provide high-precision diagnostic solutions through clinical expertise and cutting-edge
        technology, ensuring accurate results for every patient.
      </p>
    </div>
  </section>
  <section class="max-w-7xl mx-auto px-6 md:px-20 pb-24">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <RouterLink
        v-for="s in services"
        :key="s.id"
        :to="`/servicios/${s.slug}`"
        class="group bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
      >
        <div
          class="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors"
        >
          <div
            v-if="typeof s.acf?.svg_for_preview === 'string'"
            class="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110"
          >
            <img :src="s.acf.svg_for_preview" class="w-8 h-8 object-contain" />
          </div>

          <div
            v-else-if="s.acf?.svg_for_preview?.url"
            class="w-8 h-8 transition-all duration-300 group-hover:scale-110"
          >
            <img :src="s.acf.svg_for_preview.url" class="w-8 h-8 object-contain" />
          </div>

          <span
            v-else
            class="material-symbols-outlined text-primary group-hover:text-white text-3xl"
          >
            magnification_small
          </span>
        </div>

        <h3 class="text-slate-900 dark:text-white text-xl font-bold mb-3">
          {{ s.acf?.title || s.title?.rendered }}
        </h3>

        <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {{ s.acf?.description || ' ' }}
        </p>

        <div
          class="mt-auto flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all"
        >
          Learn More
          <span class="material-symbols-outlined text-lg"><ChevronRight /></span>
        </div>
      </RouterLink>
    </div>
  </section>

  <section
    class="bg-primary/5 dark:bg-primary/10 border-t border-slate-200 dark:border-slate-800 py-20"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-20 text-center">
      <h2 class="text-slate-900 dark:text-white text-3xl font-bold mb-4">
        Need a Specialized Study?
      </h2>
      <p class="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto mb-10">
        Our team of clinical experts is available to assist you with customized diagnostic solutions
        and high-complexity testing protocols.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          class="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-lg font-bold shadow-lg transition-all"
        >
          Contact a Specialist
        </button>
        <button
          class="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-3.5 rounded-lg font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
        >
          View All Tests
        </button>
      </div>
    </div>
  </section>
</template>
