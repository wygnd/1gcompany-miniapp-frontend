<script setup lang="ts">
import RefundItems from '@/modules/refund/components/RefundItems.vue'
</script>

<template>
  <section class="p-3">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Список заявок на возврат
    </h1>
    <RefundItems v-if="false" />
  </section>
</template>

<style scoped></style>
