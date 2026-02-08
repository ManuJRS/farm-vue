<script setup lang="ts">
import { ShieldCheck, FlaskConical, Award } from 'lucide-vue-next'
import type {
  HomeCertificationsSection,
  HomeCertificationItem,
} from '@/domain/home/models/HomeCertificationModel'

type Props = HomeCertificationsSection
defineProps<Props>()

function ResolveIcon(IconName: HomeCertificationItem['Icon']) {
  switch (IconName) {
    case 'verified_user':
      return ShieldCheck
    case 'science':
      return FlaskConical
    case 'workspace_premium':
      return Award
    default:
      return ShieldCheck
  }
}
</script>

<template>
  <section class="py-24 bg-slate-50 dark:bg-slate-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <div class="w-full lg:flex-1">
          <h2 class="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            {{ Eyebrow }}
          </h2>

          <h3 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">
            {{ Title }}
          </h3>

          <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {{ Description }}
          </p>

          <div class="space-y-4">
            <div
              v-for="(Item, idx) in Items"
              :key="idx"
              class="flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <component :is="ResolveIcon(Item.Icon)" class="w-5 h-5 text-primary mt-1" />
              <div>
                <h5 class="font-bold text-slate-900 dark:text-white">
                  {{ Item.Title }}
                </h5>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  {{ Item.Description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
