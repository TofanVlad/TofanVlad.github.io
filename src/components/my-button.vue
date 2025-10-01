<script setup lang="ts">
interface Props {
  href?: string;
  download?: string;
}

defineProps<Props>();
</script>

<template>
  <a
    :href="href"
    :download="download"
    class="mx-auto text-green-500 hover:text-[#090909] hover:bg-green-500 transition-all duration-300 cursor-pointer px-4 py-2 text-xl tracking-widest outline outline-1 select-none whitespace-nowrap"
  >
    <slot />
  </a>
</template>
