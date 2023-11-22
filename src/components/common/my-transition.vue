<script setup lang="ts"></script>

<template>
  <section class="anim py-8 flex flex-col my-auto">
    <slot></slot>
  </section>
</template>

<style>
.anim {
  animation: anim 500ms forwards;
}
@keyframes anim {
  from {
    opacity: 0.5;
    filter: blur(12px);
  }
  to {
    opacity: 1;
    filter: blur(0px);
  }
}
</style>
