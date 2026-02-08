<script setup lang="ts">
import NavBar from './NavBar.vue'
import FooterView from './FooterView.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavBar />

    <main class="flex-1">
      <RouterView />
    </main>
    <FooterView />
  </div>
</template>
