<script setup lang="ts">
interface Props {
  Eyebrow: string
  Title: string
  Description: string
}
defineProps<Props>()
</script>

<template>
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
</template>
