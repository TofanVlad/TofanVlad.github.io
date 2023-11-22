<script setup lang="ts">
import myContainer from "~/components/common/my-container.vue";
import myCard from "~/components/portfolio/my-card.vue";
import myPortfolioLights from "~/components/portfolio/my-portfolio-lights.vue";
import { personalProjects, commercialProjects } from "~/utils/constants";
</script>

<template>
  <my-container size="small" class="dark:text-white text-gray-800 mt-16">
    <h1 class="text-6xl font-bold">Projects 💡</h1>
    <h2 class="text-2xl mt-4 mb-16">
      Some things I’ve been working on in the past few years:
    </h2>
    <section class="flex flex-col gap-16 mb-16">
      <my-card
        v-for="(item, index) in personalProjects"
        :key="index"
        :props="{ ...item, reversed: index % 2 !== 0 }"
      />
    </section>
    <h2 class="text-3xl mb-16">
      Here are some commercial sites that I contribuited to:
    </h2>
    <section class="flex flex-col gap-16 mb-16">
      <my-card
        v-for="(item, index) in commercialProjects"
        :key="index"
        :props="{ ...item, reversed: index % 2 !== 0 }"
      />
    </section>
  </my-container>
  <my-portfolio-lights />
</template>
