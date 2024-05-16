<script setup lang="ts">

defineProps<{ text: any }>();
</script>

<template>
  <p
    class="xl:flex md:hidden flex gap-2 md:group-hover:text-white md:group-hover:translate-x-0 md:text-white/50 transition-[colors_translate] duration-300 sm:mt-4 mt-4 col-span-3 md:group-hover:opacity-100 md:-translate-x-[50px] md:opacity-0 sm:text-[2.2vw] text-[3vw] md:text-sm tracking-[.1vw]">
  <div>+</div> {{ text[$i18n.locale] }}
  </p>
</template>
