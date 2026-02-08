<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ROUTES } from '@/router/routes'
</script>

<template>
  <footer class="bg-slate-900 text-slate-400 py-12 mt-16 border-t border-slate-800">
    <div class="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div class="space-y-4">
        <div class="flex items-center gap-2 text-white">
          <div class="w-6 h-6 bg-primary rounded flex items-center justify-center">
            <span class="material-symbols-outlined text-sm">science</span>
          </div>
          <span class="text-lg font-extrabold tracking-tight uppercase">
            Pharma<span class="text-primary">Lab</span>
          </span>
        </div>

        <p class="text-sm leading-relaxed">
          Advancing medical science through rigorous research and breakthrough therapeutic
          solutions.
        </p>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Company</h4>
        <ul class="text-sm space-y-2">
          <li>
            <RouterLink :to="ROUTES.About" class="hover:text-primary transition-colors">
              Nosotros
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="ROUTES.Services" class="hover:text-primary transition-colors">
              Servicios
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="ROUTES.Contact" class="hover:text-primary transition-colors">
              Contacto
            </RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Resources</h4>
        <ul class="text-sm space-y-2">
          <li>
            <a class="hover:text-primary transition-colors" href="#"> Publications </a>
          </li>
          <li>
            <a class="hover:text-primary transition-colors" href="#"> Clinical Trials </a>
          </li>
          <li>
            <a class="hover:text-primary transition-colors" href="#"> Investors </a>
          </li>
          <li>
            <a class="hover:text-primary transition-colors" href="/contacto"> Contact </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-bold mb-4">Office</h4>
        <p class="text-sm">
          Research Triangle Park<br />
          Durham, NC 27709<br />
          United States
        </p>
      </div>
    </div>
    <div
      class="max-w-[1440px] mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between text-xs font-medium uppercase tracking-widest"
    >
      <p>© {{ new Date().getFullYear() }} Farma PharmaLab Research. All rights reserved.</p>

      <div class="flex gap-6 mt-4 md:mt-0">
        <a class="hover:text-white transition-colors" href="#">
          <RouterLink :to="ROUTES.Privacy" class="hover:text-primary transition-colors">
            Privicy
          </RouterLink>
        </a>
        <a class="hover:text-white transition-colors" href="#">
          <RouterLink :to="ROUTES.Terms" class="hover:text-primary transition-colors">
            Terms of Service
          </RouterLink>
        </a>
      </div>
    </div>
  </footer>
</template>
