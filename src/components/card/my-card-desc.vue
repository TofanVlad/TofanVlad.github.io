<script setup lang="ts">
import myChip from "./my-chip.vue";
import myDescription from "./my-description.vue";
defineProps<{
  title: { en: string; ro: string };
  year: number;
  tehnologies: string[];
  description: { en: string; ro: string };
  role?: string;
}>();
</script>

<template>
  <div
    class="flex flex-col gap-2 mt-4 overflow-hidden tracking-wide md:mt-0 lg:gap-2 md:gap-1"
  >
    <div>
      <p class="text-base tracking-widest xl:text-sm">{{ $t("card.year") }}</p>
      <h2 class="lg:text-4xl md:text-[4vw] text-[6vw] leading-none">
        {{ year }}
      </h2>
    </div>
    <div>
      <p class="text-base tracking-widest xl:text-sm">{{ $t("card.role") }}</p>
      <h2 class="lg:text-4xl md:text-[4vw] text-[6vw] leading-none">
        {{ role ? role : "FRONTEND DEVELOPER" }}
      </h2>
    </div>
    <div>
      <p class="text-base tracking-widest xl:text-sm">
        {{ $t("card.tehnologies") }}
      </p>
      <div class="flex flex-wrap gap-2 pb-1 pl-1 mt-2">
        <my-chip
          v-for="(item, index) in tehnologies"
          :key="index"
          :text="item"
        />
      </div>
    </div>
    <my-description :text="description" />
  </div>
</template>
