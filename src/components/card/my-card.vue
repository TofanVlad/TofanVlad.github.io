<script setup lang="ts">
import myLink from "../my-link.vue";
import myCardDesc from "../card/my-card-desc.vue";
defineProps<{
  project: {
    number: number;
    title: any;
    year: number;
    tehnologies: string[];
    description: { en: string; ro: string };
    video: string;
    href?: string;
    role?: string;
  };
}>();
</script>

<template>
  <article
    class="border-t-[1px] border-white md:grid flex flex-col xl:grid-cols-[1.5fr_5fr_3fr] grid-cols-[1fr_5.5fr_3fr] w-full mb-20 uppercase relative group transition-colors duration-300 hover:text-white md:text-[white]/50"
  >
    <div class="px-[1.5vw] pt-[1.5vw] xl:px-4 xl:pt-4 md:block hidden">
      <p class="xl:text-lg text-[1.2vw] tracking-widest">
        {{ project.title[$i18n.locale] }}
      </p>
      <h1 class="xl:text-[90px] text-[5.5vw] leading-none">
        0{{ project.number }}
      </h1>
      <my-link :href="project.href" :text="$t('card.visit')" />
    </div>
    <div
      class="pt-[1.5vw] md:px-4 xl:pt-4 relative aspect-video md:border-x-[1px] border-white"
    >
      <div
        class="absolute top-0 left-0 w-full h-full transition-colors duration-300 md:bg-black/50 group-hover:bg-transparent"
      ></div>
      <img
        :src="project.video"
        :alt="project.title[$i18n.locale]"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="px-[1.5vw] pt-[1.5vw] xl:px-4 xl:pt-4">
      <my-card-desc
        :title="project.title"
        :year="project.year"
        :description="project.description"
        :tehnologies="project.tehnologies"
        :role="project.role"
      />
    </div>
  </article>
</template>
