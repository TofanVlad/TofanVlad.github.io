<script setup lang="ts">
import myNavBtn from "./my-nav-btn.vue";
import useColorTheme from "../../composables/useColorTheme";
import { navRoutes } from "~/utils/constants";

const { isDarkActive, changeTheme } = useColorTheme();

const getDarkMode = computed(() => {
  return isDarkActive.value
    ? "material-symbols:light-mode"
    : "material-symbols:dark-mode";
});
</script>

<template>
  <section
    class="p-2 rounded-md outline outline-2 dark:outline-gray-800 outline-blue-500 dark:bg-transparent bg-gray-100 dark:shadow-none shadow-md transition-all duration-300 grid sm:grid-cols-6 grid-cols-3 gap-2 z-10 w-max mx-auto mt-auto"
  >
    <my-nav-btn
      v-for="(item, index) in navRoutes"
      :key="index"
      :link="item.link"
      :icon="item.icon"
      :name="item.name"
    />
    <my-nav-btn :icon="getDarkMode" @click="changeTheme" name="changeColor" />
  </section>
</template>
~/utils/constants
