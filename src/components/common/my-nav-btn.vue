<script setup lang="ts">
const props = defineProps<{ icon: string; link?: string; name: string }>();
</script>

<template>
  <nuxt-link
    v-if="link"
    :to="link"
    :name="name"
    class="rounded-md p-4 dark:bg-gray-800 bg-gray-200 h-16 w-16 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white dark:text-white text-gray-800 text-4xl flex items-center justify-center transition-all"
  >
    <Icon :name="icon" />
  </nuxt-link>
  <button
    v-else
    class="rounded-md p-4 dark:bg-gray-800 bg-gray-200 h-16 w-16 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white dark:text-white text-gray-800 text-4xl flex items-center justify-center transition-all cursor-pointer"
    :name="name"
  >
    <Icon :name="icon" />
  </button>
</template>
