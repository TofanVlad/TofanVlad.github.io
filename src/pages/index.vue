<script setup lang="ts">
import myHero from "~/components/landing/my-hero.vue";
import myLandingLights from "~/components/landing/my-landing-lights.vue";
import myBubbles from "~/components/landing/my-bubbles.vue";
</script>

<template>
  <my-hero />
  <my-landing-lights />
  <my-bubbles />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter,
.page-leave-active {
  opacity: 0.5;
  filter: blur(1rem);
}
</style>
