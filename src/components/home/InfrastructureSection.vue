<script setup lang="ts">
import type { HomeInfrastructureSection } from '@/domain/home/models/HomeInfrastructureModel'

type Props = HomeInfrastructureSection
defineProps<Props>()
</script>

<template>
  <section class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-100">
    <div class="text-center mb-16">
      <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-3">
        {{ Eyebrow }}
      </h2>

      <h3 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
        {{ Title }}
      </h3>

      <p class="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
        {{ Description }}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div
        v-for="(Item, idx) in Items"
        :key="idx"
        class="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800"
      >
        <div class="h-48 overflow-hidden">
          <img
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            :alt="Item.ImageAlt"
            :src="Item.ImageUrl"
          />
        </div>

        <div class="p-6">
          <h4 class="text-xl font-bold mb-3">
            {{ Item.Title }}
          </h4>

          <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
            {{ Item.Description }}
          </p>

          <div class="flex items-center gap-2 text-primary text-xs font-bold">
            <span class="material-symbols-outlined text-sm">
              {{ Item.BadgeIcon }}
            </span>
            {{ Item.BadgeText }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
