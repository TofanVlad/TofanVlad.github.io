<script setup lang="ts">
const nuxtApp = useNuxtApp();
const isPageLoading: Ref<boolean> = ref(true);

nuxtApp.hook("page:start", () => {
  isPageLoading.value = true;
});
nuxtApp.hook("page:finish", () => {
  isPageLoading.value = false;
});
</script>

<template>
  <section
    v-if="isPageLoading"
    class="w-full h-full absolute top-0 left-0 dark:bg-[#121a29] bg-blue-50 flex items-center justify-center z-[11]"
  >
    <span
      class="w-24 h-24 border-white border-[10px] border-b-transparent rounded-full loader"
    ></span>
  </section>
</template>

<style scoped>
.loader {
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
