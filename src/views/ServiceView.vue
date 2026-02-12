<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useService } from '@/composables/useServiceDetail'

import {
  ChevronRight,
  Banknote,
  Clock5,
  FlaskConical,
  NotepadText,
  ChevronUp,
  ChevronDown,
  SquareActivity,
  Ambulance,
} from 'lucide-vue-next'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const { service: Service } = useService(() => slug.value)

const inAccordionRequerimentOpen = ref(false)
const inAccordionPostStudyOpen = ref(false)
const inAccordionPostCareOpen = ref(false)

// handlers
const onToggleRequeriments = (event: Event) => {
  const details = event.currentTarget as HTMLDetailsElement | null
  if (!details) return
  inAccordionRequerimentOpen.value = details.open
}

const onTogglePostStudy = (event: Event) => {
  const details = event.currentTarget as HTMLDetailsElement | null
  if (!details) return
  inAccordionPostStudyOpen.value = details.open
}

const onTogglePostCare = (event: Event) => {
  const details = event.currentTarget as HTMLDetailsElement | null
  if (!details) return
  inAccordionPostCareOpen.value = details.open
}

watch(
  () => Service.value,
  (s) => {
    inAccordionRequerimentOpen.value = s.AcordionRequerimentsOpen
    inAccordionPostStudyOpen.value = s.AcordionPostStudyOpen
    inAccordionPostCareOpen.value = s.AcordionPostCareOpen
  },
  { immediate: true },
)

const BreadcrumbLast = computed(
  () => Service.value.Breadcrumbs[Service.value.Breadcrumbs.length - 1]?.Label ?? '',
)

const FormState = reactive({
  FullName: '',
  Phone: '',
  Email: '',
  Comments: '',
})

function onSubmit() {
  console.log('Submit', { Service: Service.value.Title, ...FormState })
}
</script>

<template>
  <main class="max-w-[1280px] mx-auto px-6 lg:px-10 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 items-start">
      <div class="space-y-8">
        <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <template v-for="(Crumb, idx) in Service.Breadcrumbs" :key="idx">
            <template v-if="idx !== 0">
              <span class="material-symbols-outlined text-xs"><ChevronRight /></span>
            </template>

            <template v-if="Crumb.Href && idx !== Service.Breadcrumbs.length - 1">
              <a class="hover:text-primary" :href="Crumb.Href">{{ Crumb.Label }}</a>
            </template>

            <template v-else>
              <span
                class="text-slate-900 dark:text-slate-100 font-medium"
                :class="{
                  'text-slate-500 dark:text-slate-400 font-normal':
                    idx !== Service.Breadcrumbs.length - 1,
                }"
              >
                {{ Crumb.Label }}
              </span>
            </template>
          </template>
        </div>

        <div>
          <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
            {{ Service.Title }}
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {{ Service.Description }}
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm"
        >
          <div
            class="flex items-center gap-4 px-4 sm:border-r border-slate-100 dark:border-slate-800"
          >
            <span class="material-symbols-outlined text-primary text-3xl"><Banknote /></span>
            <div>
              <p
                class="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500"
              >
                {{ Service.StatsLabelPrice }}
              </p>
              <p class="text-lg font-bold text-slate-900 dark:text-white">
                ${{ Service.StatsValuePrice }} Mxn
              </p>
            </div>
          </div>
          <div
            class="flex items-center gap-4 px-4 sm:border-r border-slate-100 dark:border-slate-800"
          >
            <span class="material-symbols-outlined text-primary text-3xl"><Clock5 /></span>
            <div>
              <p
                class="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500"
              >
                {{ Service.StatsLabelDelivery }}
              </p>
              <p class="text-lg font-bold text-slate-900 dark:text-white">
                {{ Service.StatsValueDelivery }} horas
              </p>
            </div>
          </div>

          <div
            class="flex items-center gap-4 px-4 sm:border-r border-slate-100 dark:border-slate-800"
          >
            <span class="material-symbols-outlined text-primary text-3xl"><FlaskConical /></span>
            <div>
              <p
                class="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500"
              >
                {{ Service.StatsLabelType }}
              </p>
              <p class="text-lg font-bold text-slate-900 dark:text-white">
                {{ Service.StatsValueType }}
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <details :open="inAccordionRequerimentOpen" @toggle="onToggleRequeriments" class="group">
            <summary
              :class="[
                'flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-white dark:bg-slate-900 border rounded-t-lg',
                inAccordionRequerimentOpen ? 'bg-slate-50 border-b-0' : 'bg-white rounded-lg',
              ]"
            >
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-primary"><NotepadText /></span>
                <p class="font-bold">{{ Service.AcordionRequerimentsTitle }}</p>
              </div>

              <span
                class="material-symbols-outlined transition-transform text-slate-400 group-open:rotate-180"
              >
                <div v-if="inAccordionRequerimentOpen">
                  <ChevronUp />
                </div>
                <div v-else>
                  <ChevronDown />
                </div>
              </span>
            </summary>

            <div
              class="overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 group-open:max-h-[500px] group-open:opacity-100 border border-t-0 rounded-b-lg"
            >
              <div
                class="p-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm leading-relaxed bg-white shadow-sm"
              >
                <ul class="list-disc ml-5 space-y-3">
                  <li v-for="(item, index) in Service.AcordionRequerimentsItems" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
        <div class="space-y-4">
          <details :open="inAccordionPostStudyOpen" @toggle="onTogglePostStudy" class="group">
            <summary
              :class="[
                'flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-white dark:bg-slate-900 border rounded-t-lg',
                inAccordionPostStudyOpen ? 'bg-slate-50 border-b-0' : 'bg-white rounded-lg',
              ]"
            >
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-primary"><SquareActivity /></span>
                <p class="font-bold">{{ Service.AcordionPostStudyTitle }}</p>
              </div>
              <span
                class="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400"
              >
                <div v-if="inAccordionPostStudyOpen">
                  <ChevronUp />
                </div>
                <div v-if="!inAccordionPostStudyOpen">
                  <ChevronDown />
                </div>
              </span>
            </summary>
            <div
              class="overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 group-open:max-h-[500px] group-open:opacity-100 border border-t-0 rounded-b-lg"
            >
              <div
                class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm leading-relaxed bg-white shadow-sm"
              >
                <div class="pt-4">
                  <ul class="list-disc ml-5 space-y-3">
                    <li v-for="(item, index) in Service.AcordionPostStudyItems" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </div>
        <div class="space-y-4">
          <details :open="inAccordionPostCareOpen" @toggle="onTogglePostCare" class="group">
            <summary
              :class="[
                'flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-white dark:bg-slate-900 border rounded-t-lg',
                inAccordionPostCareOpen ? 'bg-slate-50 border-b-0' : 'bg-white rounded-lg',
              ]"
            >
              <div class="flex gap-2">
                <span class="material-symbols-outlined text-primary"><Ambulance /></span>
                <p class="font-bold">{{ Service.AcordionPostCareTitle }}</p>
              </div>
              <span
                class="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400"
              >
                <div v-if="inAccordionPostCareOpen">
                  <ChevronUp />
                </div>
                <div v-if="!inAccordionPostCareOpen">
                  <ChevronDown />
                </div>
              </span>
            </summary>
            <div
              class="overflow-hidden transition-all duration-700 ease-in-out max-h-0 opacity-0 group-open:max-h-[500px] group-open:opacity-100 border border-t-0 rounded-b-lg"
            >
              <div
                class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm leading-relaxed bg-white shadow-sm"
              >
                <div class="pt-4">
                  <ul class="list-disc ml-5 space-y-3">
                    <li v-for="(item, index) in Service.AcordionPostCareItems" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      <aside class="sticky top-24">
        <div
          class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl p-6 lg:p-8"
        >
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
            {{ Service.Form.Title }}
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-8">
            {{ Service.Form.Subtitle }}
          </p>

          <form class="space-y-6" @submit.prevent="onSubmit">
            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-2">
                  Full Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="FormState.FullName"
                  class="w-full bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-sm transition-all"
                  placeholder="Enter your full name"
                  required
                  type="text"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-2">
                  Phone Number (WhatsApp) <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="FormState.Phone"
                  class="w-full bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-sm transition-all"
                  placeholder="+1 (555) 000-0000"
                  required
                  type="tel"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-2">
                  Email (Optional)
                </label>
                <input
                  v-model="FormState.Email"
                  class="w-full bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-sm transition-all"
                  placeholder="your@email.com"
                  type="email"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-2">
                  {{ Service.Form.ServiceLabel }}
                </label>
                <input
                  class="w-full bg-slate-100 dark:bg-slate-800/50 border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-lg px-4 py-3 text-slate-500 dark:text-slate-400 text-sm cursor-not-allowed"
                  readonly
                  type="text"
                  :value="BreadcrumbLast || Service.Title"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase mb-2">
                  Comments / Additional Information <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="FormState.Comments"
                  class="w-full bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none text-sm transition-all resize-none"
                  placeholder="Let us know if you prefer home collection or have any specific questions..."
                  required
                  rows="4"
                />
              </div>
            </div>

            <div class="pt-2">
              <button
                class="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                type="submit"
              >
                {{ Service.Form.SubmitLabel }}
              </button>
            </div>
          </form>

          <div
            class="mt-8 flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500"
          >
            <span class="material-symbols-outlined text-sm">lock</span>
            <span class="text-[11px] uppercase tracking-widest font-bold">
              {{ Service.Form.SecureLabel }}
            </span>
          </div>
        </div>
      </aside>
    </div>
  </main>
</template>
