<script setup lang="ts">

interface INavProps {
  direction?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<INavProps>(), {
  direction: 'horizontal',
})
</script>

<template>
  <nav :class="{ 'flex-col': props.direction === 'vertical' }" class="flex gap-2">
    <RouterLink to="/about">О компании</RouterLink>
    <RouterLink to="/privacy">Соглашение</RouterLink>
  </nav>
</template>

<style scoped></style>
