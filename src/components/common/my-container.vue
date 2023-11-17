<script setup lang="ts">
defineProps<{ size?: "small" }>();
</script>

<template>
  <section v-if="size === 'small'" class="max-w-[1040px] mx-auto w-full px-4">
    <slot />
  </section>
  <section v-else class="max-w-[1440px] mx-auto w-full px-4">
    <slot />
  </section>
</template>
