<script setup lang="ts">
import { retrieveRawInitData } from '@tma.js/sdk-vue'
import { onMounted, ref } from 'vue'

const rawData = ref<string>('')

onMounted(() => {
  rawData.value = retrieveRawInitData() ?? ''
})
</script>

<template>
  <h1>You did it!</h1>
  <span v-if="rawData">
    <p>{{ rawData }}</p>
  </span>
</template>

<style scoped></style>
