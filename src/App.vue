<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import { themeParams } from '@tma.js/sdk-vue'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  if (!themeParams.isMounted()) themeParams.mount()

  themeParams.bindCssVars()
})

onUnmounted(() => {
  themeParams.unmount()
})
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
