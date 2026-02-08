<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

interface Props {
  Title: string
  Description: string
  Feature: string
  ImageUrl: string
  ImageAlt: string
}

defineProps<Props>()
</script>

<template>
  <article
    class="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800"
  >
    <div class="h-48 overflow-hidden">
      <img
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        :alt="ImageAlt"
        :src="ImageUrl"
        loading="lazy"
      />
    </div>

    <div class="p-6">
      <h4 class="text-xl font-bold mb-3 text-slate-900 dark:text-white">
        {{ Title }}
      </h4>

      <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
        {{ Description }}
      </p>

      <div class="flex items-center gap-2 text-primary text-xs font-bold">
        <CheckCircle2 class="w-4 h-4" />
        {{ Feature }}
      </div>
    </div>
  </article>
</template>
