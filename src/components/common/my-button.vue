<script setup lang="ts">
defineProps<{ link?: string }>();
</script>

<template>
  <nuxt-link
    :to="link"
    class="rounded-md bg-blue-500 hover:bg-transparent relative block py-4 px-12 text-white font-semibold text-2xl z-[2] group w-max transition-all duration-200"
  >
    <slot />
    <div
      class="absolute -top-2 -right-2 group-hover:right-0 group-hover:top-0 w-full h-full outline-2 outline outline-blue-500 z-[1] rounded-md transition-all duration-200"
    ></div>
  </nuxt-link>
</template>
