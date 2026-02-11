<script setup lang="ts">
import { computed, reactive } from 'vue'
import { ChevronRight, Banknote, Clock5, FlaskConical } from 'lucide-vue-next'

type ServiceAccordion = {
  Id: string
  Icon: string
  Title: string
  Type: 'list' | 'text'
  Items?: string[]
  Text?: string
  Open?: boolean
}

type ServiceDetail = {
  Breadcrumbs: { Label: string; Href?: string }[]
  Title: string
  Description: string
  StatsLabelPrice: string
  StatsLabelDelivery: string
  StatsLabelType: string
  StatsValuePrice: number
  StatsValueDelivery: number
  StatsValueType: string
  Accordions: ServiceAccordion[]
  Form: {
    Title: string
    Subtitle: string
    ServiceLabel: string
    SubmitLabel: string
    SecureLabel: string
  }
}

const Service = reactive<ServiceDetail>({
  Breadcrumbs: [
    { Label: 'Home', Href: '/' },
    { Label: 'Services', Href: '/services' },
    { Label: 'Routine Blood Panel' },
  ],
  Title: 'Routine Blood Panel',
  Description:
    'A comprehensive diagnostic test to evaluate your overall health and detect a wide range of disorders, including anemia, infection, and leukemia.',
  StatsLabelPrice: 'Price',
  StatsLabelDelivery: 'Delivery Time',
  StatsLabelType: 'Sample Type',
  StatsValuePrice: 45.0,
  StatsValueDelivery: 24,
  StatsValueType: 'Blood',
  Accordions: [
    {
      Id: 'requirements',
      Icon: 'clinical_notes',
      Title: 'Requirements & Preparation',
      Type: 'list',
      Open: true,
      Items: [
        'A minimum of 8 to 12 hours of fasting is required before the blood draw.',
        'You may drink plain water, but avoid coffee, tea, or juice during the fasting period.',
        'Inform our technicians if you are taking any regular medications or supplements.',
        'We recommend scheduling your appointment for early morning.',
      ],
    },
    {
      Id: 'post-care',
      Icon: 'medical_services',
      Title: 'Post-study Care',
      Type: 'text',
      Text: `Keep the bandage on for at least 30 minutes following the draw to prevent bruising.
Avoid heavy lifting or intense exercise with the arm used for the blood draw for the remainder of the day.
Stay hydrated and eat a small snack immediately after the procedure if you were fasting.`,
    },
    {
      Id: 'delivery-detail',
      Icon: 'local_shipping',
      Title: 'Detailed Delivery Times',
      Type: 'text',
      Text: `Results for the Routine Blood Panel are typically available within 24 hours. You will receive an SMS notification and email with a secure link to download your report via our Patient Portal.`,
    },
  ],
  Form: {
    Title: 'Request Service',
    Subtitle: 'Fill in your details and our team will contact you to finalize your appointment.',
    ServiceLabel: 'Service',
    SubmitLabel: 'Request Service',
    SecureLabel: 'Secure Professional Service',
  },
})

const BreadcrumbLast = computed(
  () => Service.Breadcrumbs[Service.Breadcrumbs.length - 1]?.Label ?? '',
)

const FormState = reactive({
  FullName: '',
  Phone: '',
  Email: '',
  Comments: '',
})

function onSubmit() {
  console.log('Submit', {
    Service: Service.Title,
    ...FormState,
  })
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
          <!-- <div
            v-for="(Stat, idx) in Service.Stats"
            :key="idx"
            class="flex items-center gap-4 px-4"
            :class="{
              'sm:border-r border-slate-100 dark:border-slate-800':
                idx !== Service.Stats.length - 1,
            }"
          >
            <span class="material-symbols-outlined text-primary text-3xl">
              {{ Stat.Icon }}
            </span>
            <div>
              <p
                class="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500"
              >
                {{ Stat.Label }}
              </p>
              <p class="text-lg font-bold text-slate-900 dark:text-white">
                {{ Stat.Value }}
              </p>
            </div>
          </div> -->

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
          <details
            v-for="Section in Service.Accordions"
            :key="Section.Id"
            class="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden"
            :open="Section.Open || false"
          >
            <summary
              class="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <span
                class="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3"
              >
                <span class="material-symbols-outlined text-primary">{{ Section.Icon }}</span>
                {{ Section.Title }}
              </span>
              <span
                class="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-400"
              >
                expand_more
              </span>
            </summary>

            <div
              class="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
            >
              <div class="pt-4">
                <ul v-if="Section.Type === 'list'" class="list-disc ml-5 space-y-3">
                  <li v-for="(Item, idx) in Section.Items || []" :key="idx">
                    {{ Item }}
                  </li>
                </ul>

                <div v-else class="space-y-2">
                  <p v-for="(Line, idx) in (Section.Text || '').split('\n')" :key="idx">
                    {{ Line }}
                  </p>
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
