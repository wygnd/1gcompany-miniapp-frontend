<script setup lang="ts">
interface AppRouterLinkProps {
  title: string
  to: string
  target?: string
  class?: string
}

const props = defineProps<AppRouterLinkProps>()
</script>

<template>
  <RouterLink :to="props.to" :target="props.target" :class="props.class" class="link">
    {{ props.title }}
  </RouterLink>
</template>

<style scoped>
.link:hover {
  color: var(--tg-theme-link-color);
}
</style>
