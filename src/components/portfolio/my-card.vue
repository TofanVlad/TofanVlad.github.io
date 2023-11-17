<script setup lang="ts">
import myContainer from "../common/my-container.vue";
import myButton from "../common/my-button.vue";

interface Props {
  image: string;
  title: string;
  description: string;
  link: string;
  reversed?: boolean;
}

defineProps<{ props: Props }>();
</script>

<template>
  <my-container
    size="small"
    class="flex flex-col items-center gap-8 h-full !px-0 z-[5]"
    :class="props.reversed ? 'md:flex-row-reverse' : 'md:flex-row'"
  >
    <div
      class="md:w-1/2 w-full outline-2 outline outline-blue-500 rounded-md h-[300px]"
    >
      <img
        :src="props.image"
        :alt="props.title"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="md:w-1/2 w-full flex flex-col gap-4 justify-between py-8">
      <h2 class="text-4xl font-bold">🌌 {{ props.title }}</h2>
      <p class="text-lg">{{ props.description }}</p>
      <my-button v-if="props.link.length > 0" :link="props.link"
        >View project</my-button
      >
      <my-button v-else>Work in progress</my-button>
    </div>
  </my-container>
</template>
