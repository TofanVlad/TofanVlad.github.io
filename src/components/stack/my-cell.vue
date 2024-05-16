<script setup lang="ts">
defineProps<{ text: string, index: number }>()
</script>

<template>
    <div class="border-[1px] border-white bg-black/75 flex items-center justify-center lg:text-[2.2vw] sm:text-xl font-light tracking-wider uppercase"
        :class="index === 0 && 'lg:col-span-1 col-span-2'">
        <p>{{ text }}</p>
    </div>
</template>