<script setup lang="ts">
import myNavBtn from "./my-nav-btn.vue";
import useColorTheme from "../../composables/useColorTheme";
const routes = [
  { link: "/", icon: "material-symbols:home-rounded" },
  { link: "/portfolio", icon: "ic:baseline-lightbulb" },
  { link: "/about", icon: "ic:sharp-person" },
  { link: "mailto:test@gmail.com", icon: "mdi:gmail" },
  { link: "https://github.com/TofanVlad", icon: "mdi:github" },
];

const { isDarkActive, changeTheme } = useColorTheme();

const getDarkMode = computed(() => {
  return isDarkActive.value
    ? "material-symbols:light-mode"
    : "material-symbols:dark-mode";
});
</script>

<template>
  <section
    class="mx-auto p-2 rounded-md outline outline-2 dark:outline-gray-800 outline-blue-500 dark:bg-transparent bg-gray-100 dark:shadow-none shadow-md transition-all duration-300 flex gap-4"
  >
    <my-nav-btn
      v-for="(item, index) in routes"
      :key="index"
      :link="item.link"
      :icon="item.icon"
    />
    <my-nav-btn :icon="getDarkMode" @click="changeTheme" />
  </section>
</template>
