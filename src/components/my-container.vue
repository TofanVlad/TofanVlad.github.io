<script setup lang="ts">
defineProps<{ tag?: string }>();
</script>

<template>
  <component :is="tag ? tag : 'section'" class="max-w-[1280px] mx-auto lg:px-0 px-2 min-h-[100vh]">
    <slot />
  </component>
</template>
