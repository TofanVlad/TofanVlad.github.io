<script setup lang="ts">
import myContainer from "../common/my-container.vue";
</script>
<template>
  <my-container class="z-10">
    <nuxt-link to="/" class="w-max block">
      <h1 class="text-blue-500 sm:text-6xl text-5xl custom-font w-max">
        Tofan Vlad<span class="text-pink-500 pl-1">.</span>
      </h1>
    </nuxt-link>
  </my-container>
</template>

<style scoped>
.custom-font {
  font-family: "Yellowtail", cursive;
}
</style>
