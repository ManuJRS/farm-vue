<script setup lang="ts"></script>

<template>
  <div class="min-h-screen">
    <!-- <header class="border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <RouterLink to="/" class="font-black">Farma</RouterLink>

        <nav class="ml-auto flex gap-6 text-sm font-medium">
          <RouterLink to="/" class="opacity-80 hover:opacity-100">Inicio</RouterLink>
          <RouterLink to="/nosotros" class="opacity-80 hover:opacity-100">Nosotros</RouterLink>
          <RouterLink to="/servicios" class="opacity-80 hover:opacity-100">Servicios</RouterLink>
          <RouterLink to="/contacto" class="opacity-80 hover:opacity-100">Contacto</RouterLink>
        </nav>
      </div>
    </header> -->

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="border-t">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm opacity-70">
        © {{ new Date().getFullYear() }} Farma
      </div>
    </footer>
  </div>
</template>
