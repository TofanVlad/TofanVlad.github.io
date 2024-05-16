<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { aboutThree } from "../threejs/about";
import myContainer from "./my-container.vue";

const canvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(() => {
  if (canvas.value !== null) aboutThree(canvas.value);
});
</script>

<template>
  <my-container
    class="flex flex-col md:pt-28 pt-24 pb-16 z-10 relative lg:gap-16 gap-8 uppercase"
  >
    <div
      class="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-8 gap-4 xl:mt-24 sm:mt-8 mt-0"
    >
      <div class="flex flex-col gap-2 px-8">
        <p class="sm:text-sm text-xs tracking-widest">
          {{ $t("about.title") }}
        </p>
        <h1 class="md:text-2xl sm:text-2xl text-base tracking-widest uppercase">
          {{ $t("about.title_desc") }}
        </h1>
      </div>
    </div>

    <div
      class="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-8 gap-4 bg-[#0e0e0e]/50"
    >
      <div class="flex flex-col gap-2 lg:whitespace-nowrap px-8">
        <p class="sm:text-sm text-xs tracking-widest">
          {{ $t("about.exp") }}
        </p>
        <h1 class="md:text-[46px] sm:text-4xl text-2xl">
          Frontend Developer<br class="lg:block hidden" />
          TweenyOne SRL <br />
          2023 - 2024
        </h1>
      </div>
      <div
        class="lg:border-l-2 lg:border-t-0 border-t-2 border-white h-full md:text-3xl sm:text-xl text-lg lg:mx-0 mx-8 lg:py-0 lg:px-4 pt-4 tracking-widest flex"
      >
        <p class="my-auto">
          {{ $t("about.exp_desc") }}
        </p>
      </div>
    </div>

    <!-- <div
      class="sm:flex hidden lg:flex-row flex-col justify-between lg:items-center gap-8"
    >
      <div class="flex flex-col gap-2 lg:whitespace-nowrap px-8 w-full">
        <h1 class="sm:text-sm text-xs tracking-widest">
          {{ $t("about.education") }}
        </h1>
        <h2 class="lg:text-3xl md:text-2xl text-xl tracking-widest uppercase">
          {{ $t("about.education_web_1") }}<br class="lg:block hidden" />
          {{ $t("about.education_web_2") }} <br />
          <div class="flex justify-between">
            <p>Sep 2019 - Jun 2023</p>
            <p>{{ $t("about.city") }}</p>
          </div>
        </h2>
        <hr />
        <h2 class="lg:text-3xl md:text-2xl text-xl tracking-widest uppercase">
          {{ $t("about.education_utm_1") }}<br class="lg:block hidden" />
          {{ $t("about.education_utm_2") }} <br />
          <div class="flex justify-between">
            <p>Sep 2023 - Present</p>
            <p>{{ $t("about.city") }}</p>
          </div>
        </h2>
      </div>
    </div> -->
  </my-container>
  <canvas ref="canvas" class="w-screen h-screen absolute top-0 left-0"></canvas>
  <!-- <div
    class="absolute bottom-0 left-0 w-screen h-1/3 bg-gradient-to-t from-black/75"
  ></div> -->
</template>
