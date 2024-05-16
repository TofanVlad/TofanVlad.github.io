<script setup lang="ts">
import myContainer from "./components/my-container.vue";
import myHeader from "./components/my-header.vue";
import myAbout from "./components/my-about.vue";
import myCard from "./components/card/my-card.vue";
import myNav from "./components/my-nav.vue";
import myMenu from "./components/my-menu.vue";
import myFooter from "./components/my-footer.vue"
import myStack from "./components/stack/my-stack.vue"

import { projectsInfo } from './assets/constants.ts'
</script>

<template>
  <my-container tag="header" id="home">
    <my-nav />
    <my-header />
    <my-menu :show-menu="true" />
  </my-container>
  <hr class="mx-4 my-8" />
  <main class="relative" id="about">
    <my-about />
  </main>
  <hr class="mb-16" />
  <my-container id="projects" class="md:pt-44 pt-24">
    <p class="justify-end items-center uppercase flex gap-2 xl:px-0 px-2 tracking-widest">
      <span class="text-lg">+</span> {{ $t("card.selected") }}
    </p>
    <myCard v-for="(item, index) in projectsInfo" :key="index" :project="{ ...item, number: index + 1 }" />
    <my-stack />
  </my-container>
  <hr class="mb-16" />
  <footer class="relative" id="contacts"> <my-footer /> </footer>
</template>
