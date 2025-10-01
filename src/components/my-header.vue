<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { headerThree } from "../threejs/header";
import myButton from "./my-button.vue";

const canvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(() => {
  if (canvas.value !== null) headerThree(canvas.value);
});
</script>

<template>
  <canvas ref="canvas" class="h-screen w-screen absolute top-0 left-0"></canvas>
  <div class="relative w-full h-screen pointer-events-none">
    <div
      class="flex sm:flex-row flex-col-reverse justify-between w-full absolute md:top-1/4 sm:top-[20%] top-[12%] md:-translate-y-1/4 sm:-translate-y-[20%] -translate-y-[12%] px-8"
    >
      <div class="flex flex-col font-light tracking-wide text-2xl">
        TOFAN VLAD <br />
        {{ $t("header.based") }}
      </div>
      <p
        class="text-right sm:text-2xl text-base font-light sm:tracking-wide tracking-widest"
      >
        {{ $t("header.welcome_1") }} <br />
        {{ $t("header.welcome_2") }}
      </p>
    </div>
    <h1
      class="py-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-white md:bg-[#0e0e0e]/50 bg-[#0e0e0e]/75 w-max px-8 absolute sm:text-start text-center"
    >
      <p
        class="lg:text-[60px] md:text-5xl sm:text-4xl text-[6.2vw] tracking-widest"
      >
        FRONTEND DEVELOPER
      </p>
    </h1>
  </div>
  <div
    class="absolute left-1/2 -translate-x-1/2 bottom-4 w-full text-center px-8"
  >
    <myButton href="#contacts">
      {{ $t("header.button") }}
    </myButton>
    <h2 class="text-3xl mx-auto mt-8">
      {{ $t("header.specialize") }}
    </h2>
  </div>
</template>
