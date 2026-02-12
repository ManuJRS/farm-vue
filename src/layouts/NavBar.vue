<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ROUTES } from '@/router/routes'
import { Menu, Microscope } from 'lucide-vue-next'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

import { getNavServices, type NavServiceItemDto } from '@/api/navService'

const route = useRoute()

const services = ref<NavServiceItemDto[]>([])
const isMobileOpen = ref(false)
const isMobileServicesOpen = ref(false)

const servicesForMenu = computed(() =>
  services.value.map((s) => ({
    id: s.id,
    title: s.title.rendered,
    slug: s.slug,
  })),
)

onMounted(async () => {
  services.value = await getNavServices()
})

//Cierre automatico del menu al seleccionar algo en mobile
watch(
  () => route.fullPath,
  () => {
    isMobileOpen.value = false
    isMobileServicesOpen.value = false
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-4 md:gap-8">
          <RouterLink :to="ROUTES.Home">
            <div class="flex gap-4">
              <span class="material-symbols-outlined text-primary text-3xl"
                ><Microscope class="w-8 h-8"
              /></span>
              <p class="font-bold text-2xl">FarmaWeb</p>
            </div>
          </RouterLink>

          <nav class="hidden md:flex items-center gap-6">
            <RouterLink
              :to="ROUTES.Home"
              class="text-sm font-semibold hover:text-primary transition-colors"
            >
              Inicio
            </RouterLink>

            <RouterLink
              :to="ROUTES.About"
              class="text-sm font-semibold hover:text-primary transition-colors"
            >
              Nosotros
            </RouterLink>

            <div class="relative group">
              <RouterLink
                :to="ROUTES.Services"
                class="text-sm font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                Servicios
              </RouterLink>

              <div class="absolute left-0 top-full h-6 w-64"></div>

              <div
                class="absolute left-0 mt-6 w-64 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg overflow-hidden opacity-0 invisible translate-y-1 transition group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              >
                <RouterLink
                  v-for="s in servicesForMenu"
                  :key="s.id"
                  class="block px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  :to="`/servicios/${s.slug}`"
                >
                  {{ s.title }}
                </RouterLink>

                <div v-if="servicesForMenu.length === 0" class="px-4 py-3 text-sm text-slate-500">
                  No hay servicios publicados.
                </div>

                <RouterLink
                  :to="ROUTES.Services"
                  class="block px-4 py-3 text-sm font-semibold text-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Ver todos los servicios
                </RouterLink>
              </div>
            </div>

            <RouterLink
              :to="ROUTES.Contact"
              class="text-sm font-semibold hover:text-primary transition-colors"
            >
              Contacto
            </RouterLink>
          </nav>
        </div>

        <div class="flex items-center gap-3">
          <div class="relative hidden sm:block">
            <input
              class="pl-10 pr-4 py-1.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary outline-none"
              placeholder="Search facilities..."
              type="text"
            />
          </div>

          <Button class="hidden sm:inline-flex font-bold"> Get a Quote </Button>

          <Sheet v-model:open="isMobileOpen">
            <SheetTrigger as-child>
              <Button variant="outline" size="icon" class="md:hidden">
                <span class="material-symbols-outlined"><Menu class="h-5 w-5" /> </span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" class="w-[320px] sm:w-[380px]">
              <div class="flex flex-col gap-4 mt-6">
                <RouterLink
                  :to="ROUTES.Home"
                  class="text-sm font-semibold hover:text-primary transition-colors pl-4"
                >
                  Inicio
                </RouterLink>

                <RouterLink
                  :to="ROUTES.About"
                  class="text-sm font-semibold hover:text-primary transition-colors pl-4"
                >
                  Nosotros
                </RouterLink>

                <button
                  type="button"
                  class="flex items-center justify-between text-sm font-semibold hover:text-primary transition-colors pl-4"
                  @click="isMobileServicesOpen = !isMobileServicesOpen"
                >
                  <span>Servicios</span>
                </button>

                <div v-show="isMobileServicesOpen" class="pl-2 space-y-1">
                  <RouterLink :to="ROUTES.Services"> </RouterLink>

                  <RouterLink
                    v-for="s in servicesForMenu"
                    :key="s.id"
                    :to="`/servicios/${s.slug}`"
                    class="block text-sm text-slate-700 dark:text-slate-200 hover:text-primary transition-colors pl-2"
                  >
                    {{ s.title }}
                  </RouterLink>

                  <div v-if="servicesForMenu.length === 0" class="text-sm text-slate-500">
                    No hay servicios publicados.
                  </div>
                </div>

                <RouterLink
                  :to="ROUTES.Contact"
                  class="text-sm font-semibold hover:text-primary transition-colors pl-4"
                >
                  Contacto
                </RouterLink>

                <div class="pt-2 mx-4">
                  <div class="relative">
                    <input
                      class="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none"
                      placeholder="Search facilities..."
                      type="text"
                    />
                  </div>
                </div>
                <div class="mx-4">
                  <Button class="w-full font-bold"> Get a Quote </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </header>
</template>
