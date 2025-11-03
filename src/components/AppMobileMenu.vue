<script setup lang="ts">
import AppNav from '@/components/AppNav.vue'
import AppLogo from '@/components/AppLogo.vue'

const handleClickMobileMenu = (event: MouseEvent) => {
  console.log('click', event)
}
</script>

<template>
  <div id="burger" @click="handleClickMobileMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <AppNav direction="vertical" />
  <section id="mobile-menu">
    <AppLogo />
  </section>
</template>

<style scoped>
#mobile-menu {
  position: fixed;
  max-width: 300px;
  width: 100%;
  transform: translateX(-300px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: transform 0.4s;
}
#burger {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#burger span {
  width: 30px;
  height: 3px;
  background: #ffffff;
}
</style>
