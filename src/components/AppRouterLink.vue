<script setup lang="ts">
import { useRoute } from 'vue-router'

interface AppRouterLinkProps {
  title?: string | Symbol
  to: string
  target?: string
  class?: string
  activeClass?: string
}

const props = withDefaults(defineProps<AppRouterLinkProps>(), {
  activeClass: 'active',
})
</script>

<template>
  <RouterLink
    v-if="props.title && props.to !== '/'"
    :to="props.to"
    :target="props.target"
    class="link"
    :class="props.class"
    :active-class="props.activeClass"
  >
    {{ props.title }}
  </RouterLink>
</template>

<style scoped>
.link:hover,
.link.active {
  color: var(--tg-theme-link-color);
}
</style>
