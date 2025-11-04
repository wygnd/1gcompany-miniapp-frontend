<script setup lang="ts">
import { useUserStore } from '@/stores/user.ts'
import { onMounted } from 'vue'

const userStore = useUserStore()

console.log(userStore.user)

onMounted(async () => {
  if (userStore.user) return

  const isLoggin = await userStore.fetchUser()

  console.log('Is success logggin: ', isLoggin)
  console.log('Check user object: ', userStore.user)
})
</script>

<template>
  <h1>This main page??</h1>
  <section v-if="userStore.user">
    <h2 v-if="userStore.user?.name">Hello, {{ userStore.user?.name}}</h2>
  </section>
</template>

<style scoped></style>
