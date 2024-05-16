<script setup lang="ts">
import { isModalActive, toggleModal } from "../composable/useModal.ts";

const routes = [
  { title: "nav.home", href: "#home" },
  { title: "nav.about", href: "#about" },
  { title: "nav.projects", href: "#projects" },
  { title: "nav.contacts", href: "#contacts" },
];
</script>

<template>
  <Transition name="slide-fade">
    <section
      v-if="isModalActive"
      class="w-screen h-[100dvh] bg-[#090909] bottom-0 left-0 md:hidden flex flex-col fixed px-4 pt-20 z-[100]"
    >
      <h1 class="uppercase text-2xl mt-20">
        {{ $t("header.welcome_1") }} <br />
        {{ $t("header.welcome_2") }}
      </h1>
      <div class="flex flex-col my-auto divide-y-2">
        <a
          :href="item.href"
          v-for="(item, index) in routes"
          :key="index"
          class="uppercase py-4 cursor-pointer flex gap-2"
          @click="toggleModal"
          ><p class="text-4xl">{{ $t(item.title) }}</p>
          <p class="text-xs">0{{ index + 1 }}</p></a
        >
      </div>
      <hr class="mt-auto" />
      <div class="flex items-center justify-between mb-4 py-2">
        <a href="mailto:tofanvladit@gmail.com ">E-MAIL</a>
        <a href="https://www.linkedin.com/in/vlad-tofan-349b70291/">LINKEDIN</a>
        <a href="https://discordapp.com/users/284386100829487106">DISCORD</a>
        <a href="https://github.com/TofanVlad">GITHUB</a>
      </div>
    </section>
  </Transition>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.5s;
}

.slide-fade-leave-active {
  transition: all 0.5s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
