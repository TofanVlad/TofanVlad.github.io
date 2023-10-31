<script setup lang="ts">
import myContainer from "../common/my-container.vue";
import myButton from "../common/my-button.vue";
</script>

<template>
  <my-container
    class="mt-16 dark:text-white text-gray-800 transition-all duration-300 text-5xl font-bold flex flex-col gap-8 relative"
  >
    <h2>Hello! 👋🏻</h2>
    <h2>My name is Vlad</h2>
    <h2>I'm a Frontend <span class="text-blue-500 target">Developer</span></h2>
    <h3 class="text-xl font-light">
      Let me help you grow your business and make your product look pretty while
      at it
    </h3>
    <my-button class="mt-16" link="/">View Portfolio</my-button>
    <div class="absolute top-1/2 -translate-y-1/2 right-4 z-[-5] w-[450px]">
      <nuxt-img
        src="/undraw_multitasking_re_ffpb.svg"
        alt="Multitasking image"
      />
    </div>
  </my-container>
</template>

<style scoped>
.target {
  background: linear-gradient(90deg, #3b82f6 30%, #ec4899 50%, #3b82f6 70%);
  background-size: 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: bg-anim 2s infinite;
}

@keyframes bg-anim {
  from {
    background-position: 0%;
  }
  to {
    background-position: 100%;
  }
}
</style>
