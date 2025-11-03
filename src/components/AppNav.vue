<script setup lang="ts">
import AppRouterLink from '@/components/AppRouterLink.vue'

interface INavProps {
  direction?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<INavProps>(), {
  direction: 'horizontal',
})
</script>

<template>
  <nav :class="{ 'flex-col': props.direction === 'vertical' }" class="flex gap-2">
    <AppRouterLink to="/about" title="О компании" />
    <AppRouterLink to="/privacy" title="Соглашение" />
  </nav>
</template>

<style scoped></style>
