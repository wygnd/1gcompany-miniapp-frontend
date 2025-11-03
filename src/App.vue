<script setup lang="ts">
import { retrieveRawInitData } from '@tma.js/sdk-vue'

console.log(retrieveRawInitData);
</script>

<template>
  <h1>You did it!</h1>
  <span v-if="retrieveRawInitData">
    <p>{{ retrieveRawInitData}}</p>
  </span>
</template>

<style scoped></style>
