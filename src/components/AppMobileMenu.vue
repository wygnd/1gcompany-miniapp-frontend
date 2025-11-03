<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import AppLogo from '@/components/AppLogo.vue'
import { ref } from 'vue'

const isMenuOpened = ref<boolean>(false)

const handleClickMobileMenu = (event: MouseEvent) => {
  isMenuOpened.value = !isMenuOpened.value

  console.log('click', event)
  const burger = event.target as HTMLElement
}
</script>

<template>
  <div id="burger" :class="{ active: isMenuOpened }" @click="handleClickMobileMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <section id="mobile-menu" :class="{ active: isMenuOpened }">
    <AppLogo />
    <AppNav direction="vertical" />
  </section>
</template>

<style scoped>
#mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 300px;
  width: 100%;
  height: 100%;
  transform: translateX(-300px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: var(--tg-theme-bg-color);
  border-right: 1px solid var(--tg-theme-button-color);
  transition: transform 0.4s ease-out;
}
#mobile-menu.active {
  transform: translateX(0);
}
#burger {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  transition: background 0.4s ease-out;
}
#burger span {
  width: 30px;
  height: 3px;
  background: var(--tg-theme-button-text-color);
  pointer-events: none;
}

#burger.active {
  background: var(--tg-theme-link-color);
}
</style>
