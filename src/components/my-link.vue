<script setup lang=ts>
defineProps<{ href?: string, text: string }>()
</script>

<template>
    <a v-if="href" :href="href" target="_blank"
        class="items-center flex gap-2 relative w-max group md:hover:pl-4 hover:pl-3 transition-[padding] overflow-hidden md:text-[.8vw] text-[12px] lg:text-sm md:text-xs link">
        <div class="-translate-x-[110%] absolute left-0 bottom-0 transition-transform w-full">+</div>
        <div class="absolute bottom-0 left-0 w-full h-[1px] bg-white -translate-x-[110%] transition-transform"></div>
        <p class="tracking-widest">{{ text }}</p>
    </a>
</template>


<style scoped>
.link:hover div {
    transform: translateX(0);
}
</style>
