<script setup lang="ts">
import myContainer from "../common/my-container.vue";
import myButton from "../common/my-button.vue";
</script>

<template>
  <my-container
    size="small"
    class="mt-auto dark:text-white text-gray-800 transition-all duration-300 xl:text-6xl md:text-5xl text-4xl font-bold flex flex-col gap-8 relative"
  >
    <div class="flex flex-col sm:gap-8 gap-4 z-10">
      <h2>Hello! 👋🏻</h2>
      <h2>My name is Vlad</h2>
      <h2 class="sm:leading-normal leading-relaxed">
        I'm a Frontend
        <span class="text-blue-500 target xl:text-7xl lg:text-6xl text-5xl"
          >Developer</span
        >
      </h2>
      <h3 class="xl:text-xl text-lg font-light">
        Let me help you grow your business and make your product look pretty
        while at it
      </h3>
      <my-button class="sm:mt-16 mt-8 md:mx-0 mx-auto" link="/portfolio"
        >View Portfolio</my-button
      >
    </div>
    <div
      class="absolute top-1/2 -translate-y-1/2 right-4 dark:opacity-20 opacity-40 blur-sm xl:w-[550px] lg:w-[500px] w-[450px] md:block hidden"
    >
      <nuxt-img
        src="/undraw_working_late_re_0c3y.svg"
        alt="Background image"
        class="w-full h-full object-cover"
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
  animation: bg-anim 2s infinite reverse ease-in;
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
