<script setup lang="ts">
defineProps<{ link?: string; download?: boolean }>();
</script>

<template>
  <nuxt-link
    v-if="!download"
    :to="link"
    class="rounded-md bg-blue-500 hover:bg-transparent relative block sm:py-4 py-3 sm:px-12 px-8 text-white dark:hover:text-white hover:text-gray-800 font-semibold sm:text-2xl text-xl z-[2] group w-max transition-all duration-200 mt-8 select-none"
  >
    <slot />
    <div
      class="absolute -top-2 -right-2 group-hover:right-0 group-hover:top-0 w-full h-full outline-2 outline outline-blue-500 z-[1] rounded-md transition-all duration-200 pointer-events-none"
    ></div>
  </nuxt-link>

  <a
    v-else
    :href="link"
    class="rounded-md bg-blue-500 hover:bg-transparent relative block sm:py-4 py-3 sm:px-12 px-8 text-white dark:hover:text-white hover:text-gray-800 font-semibold sm:text-2xl text-xl z-[2] group w-max transition-all duration-200 mt-8 select-none"
    download
  >
    <slot />
    <div
      class="absolute -top-2 -right-2 group-hover:right-0 group-hover:top-0 w-full h-full outline-2 outline outline-blue-500 z-[1] rounded-md transition-all duration-200 pointer-events-none"
    ></div>
  </a>
</template>
