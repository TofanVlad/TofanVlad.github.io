<script setup lang="ts">
import myName from "../components/landing/my-name.vue";
import myNav from "../components/common/my-nav.vue";
</script>

<template>
  <main class="min-h-[100svh] py-8 flex flex-col overflow-x-hidden relative">
    <my-name />
    <slot />
    <my-nav />
  </main>
</template>
