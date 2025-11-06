<script setup lang="ts">
interface INotFoundProps {
  title: string
  description?: string
}

const { title, description } = defineProps<INotFoundProps>()
</script>

<template>
  <section class="not-found mt-10">
    <h2 class="text-4xl font-bold dark:text-white">{{title}}</h2>
    <p v-if="description" class="text-gray-500 whitespace-pre-line dark:text-gray-400 mt-2">{{ description}}</p>
  </section>
</template>

<style scoped></style>
