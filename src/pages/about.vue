<script setup lang="ts">
import myContainer from "~/components/common/my-container.vue";
import myButton from "~/components/common/my-button.vue";
import myLandingLights from "~/components/landing/my-landing-lights.vue";
</script>

<template>
  <my-container size="small" class="dark:text-white text-gray-800 mt-16 z-[5]">
    <h1 class="lg:text-6xl md:text-5xl text-4xl font-bold">About Me 👨‍</h1>
    <h2 class="font-light md:text-2xl text-xl mt-4">
      A brief intro to who I am and how I do what I do:
    </h2>
    <img
      src="/Profile-pic.webp"
      alt="profile-picture"
      width="403"
      height="504"
      class="mx-auto my-8 rounded-md md:w-[403px] w-[302px] md:h-[504px] h-[403px] object-contain"
    />
    <p class="md:text-2xl text-xl font-medium my-4">
      I am a student from the Republic of Moldova at the Technical University.
      I'm a passionate learner who's always willing to learn and work across
      technologies and domains 💡 . I love to explore new technologies and
      leverage them to solve real-life problems ✨.
    </p>
    <p class="font-medium md:text-xl text-lg my-1">
      🌱 I’m currently learning Vue, TypeScript, Javascript
    </p>
    <p class="font-medium md:text-xl text-lg my-1">
      💬 Ask me about Vue.js, NuxtJS, TypeScript
    </p>
    <p class="font-medium md:text-xl text-lg my-1">
      📫 How to reach me tofanvladit@gmail.com
    </p>
    <my-button class="mb-8" link="CV_Tofan_Vlad.pdf" download
      >Download CV</my-button
    >
  </my-container>
  <my-landing-lights />
</template>
