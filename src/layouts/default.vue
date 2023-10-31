<script setup lang="ts">
import myName from "../components/landing/my-name.vue";
import myNav from "../components/common/my-nav.vue";
</script>

<template>
  <main
    class="w-screen h-[100dvh] flex flex-col justify-between dark:bg-[#121a29] bg-[#f9fafb] py-8 transition-all duration-300"
  >
    <my-name />
    <slot />
    <my-nav />
  </main>
</template>

<style>
body {
  min-height: 100vh;
  font-family: "Space Grotesk", sans-serif;
}

#__nuxt {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
