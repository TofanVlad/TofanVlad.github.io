<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div
    class="outline-1 outline md:outline-white/50 transition-[colors_outline] duration-300 md:group-hover:outline-green-500 md:group-hover:text-green-500 md:text-white/50 text-green-500 lg:px-3 px-2 md:py-1 py-[2px] rounded lg:text-sm md:text-xs text-[12px] md:leading-none">
    {{ text }}
  </div>
</template>
