<script setup lang="ts">
import { useUserStore } from '@/stores/user.ts'
import { onMounted } from 'vue'

const userStore = useUserStore()

onMounted(async () => {
  if (userStore.user) return

  userStore.fetchUser()
})
</script>

<template>
  <h1>This main page??</h1>
</template>

<style scoped></style>
