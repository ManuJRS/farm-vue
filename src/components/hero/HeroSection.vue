<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BadgeCheck, ArrowRight } from 'lucide-vue-next'

interface Props {
  BackgroundImageUrl: string
  Eyebrow: string
  Title: string
  Description: string
  PrimaryCtaText: string
  SecondaryCtaText: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'primary'): void
  (e: 'secondary'): void
}>()
</script>

<template>
  <section class="relative h-[600px] md:h-[560px] w-full flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/30"
      ></div>
      <div class="absolute inset-0 z-10 bg-cyan-500/10 mix-blend-soft-light"></div>

      <div
        class="w-full h-full bg-cover bg-center scale-[1.02]"
        :style="{ backgroundImage: `url(${BackgroundImageUrl})` }"
      />
    </div>
    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="max-w-2xl mx-auto text-left text-white">
        <Badge
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6"
        >
          <BadgeCheck class="w-4 h-4" />
          {{ Eyebrow }}
        </Badge>

        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          {{ Title }}
        </h1>
        <p class="text-lg md:text-xl text-white/85 font-medium mb-8 leading-relaxed">
          {{ Description }}
        </p>
        <div class="flex flex-wrap justify-start gap-4">
          <Button
            size="lg"
            class="px-8 py-6 font-bold rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            @click="emit('primary')"
          >
            {{ PrimaryCtaText }}
            <ArrowRight class="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            class="px-8 py-6 font-bold rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border-white/25 text-white"
            @click="emit('secondary')"
          >
            {{ SecondaryCtaText }}
          </Button>
        </div>

        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            ISO-aligned processes
          </div>
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            Chain-of-custody traceability
          </div>
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
            Clinical-grade reporting
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
