<script setup lang="ts">
import AppRouterLink from '@/components/AppRouterLink.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface INavProps {
  direction?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<INavProps>(), {
  direction: 'horizontal',
})
</script>

<template>
  <nav
    v-if="router.getRoutes().length > 0"
    :class="{ 'flex-col': props.direction === 'vertical' }"
    class="flex gap-2"
  >
    <AppRouterLink
      v-for="{ path, name } in router.getRoutes()"
      :key="path"
      :to="path"
      :title="name"
    />
  </nav>
</template>

<style scoped></style>
