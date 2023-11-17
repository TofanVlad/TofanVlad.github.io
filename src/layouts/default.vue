<script setup lang="ts">
import { useHead } from "nuxt/app";
import myName from "../components/landing/my-name.vue";
import myNav from "../components/common/my-nav.vue";
import myLoader from "~/components/common/my-loader.vue";

useHead({
  htmlAttrs: {
    class: "dark",
  },
});
</script>

<template>
  <main
    class="min-h-[100dvh] py-8 flex flex-col transition-colors duration-300 dark:bg-[#121a29] bg-blue-50 overflow-x-hidden relative"
  >
    <!-- <my-loader /> -->
    <my-name />
    <slot />
    <my-nav />
  </main>
</template>

<style>
#__nuxt {
  font-family: "Space Grotesk", sans-serif;
  overflow-x: hidden;
}
</style>
