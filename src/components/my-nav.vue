<script setup lang="ts">
import { toggleModal } from "../composable/useModal.ts";
</script>

<template>
  <nav
    class="flex items-center gap-8 justify-between fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-[1240px] px-8 z-[999]">
    <div
      class="md:px-4 px-2 outline outline-1 outline-white bg-[#0e0e0e]/75 flex items-center md:cursor-auto cursor-pointer justify-between gap-4 uppercase top-8 md:w-[650px]"
      @click="toggleModal">
      <div class="md:w-[75px] w-[45px] aspect-square">
        <img src="/logo-removebg.png" alt="Logo" class="w-full h-full object-contain" />
      </div>

      <p class="md:hidden block text-lg tracking-widest">
        {{ $t("nav.menu") }}
      </p>

      <ul class="md:flex hidden items-center gap-4">
        <a href="#home"
          class="relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300">{{
        $t("nav.home") }}</a>
        <a href="#about"
          class="relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300">{{
        $t("nav.about") }}</a>
        <a href="#projects"
          class="relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300">{{
        $t("nav.projects") }}</a>
        <a href="#contacts"
          class="relative before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-white before:transition-all before:duration-300">{{
        $t("nav.contacts") }}</a>
      </ul>
    </div>
    <div class="outline outline-[1px] outline-white flex h-max relative bg-[#0e0e0e]/75">
      <div class="py-1 px-2 cursor-pointer text-black invert-[1] mix-blend-difference font-medium z-[5]"
        @click="$i18n.locale = 'en'">
        EN
      </div>
      <div class="py-1 px-2 cursor-pointer text-black invert-[1] mix-blend-difference font-medium z-[5]"
        @click="$i18n.locale = 'ro'">
        RO
      </div>
      <div class="absolute w-1/2 h-full bg-white top-0 transition-all"
        :class="$i18n.locale === 'en' ? 'translate-x-0' : 'translate-x-[calc(100%+1px)]'"></div>
    </div>
  </nav>
</template>

<style scoped>
.label {
  font-size: 40px;
  color: white;
}
</style>
