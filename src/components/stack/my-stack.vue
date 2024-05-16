<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { stackThree } from "../../threejs/stack";
import { myStack } from '../../assets/constants'
import myCell from '../../components/stack/my-cell.vue'

const canvas: Ref<HTMLCanvasElement | null> = ref(null);
const showStack: Ref<boolean> = ref(true)

onMounted(() => {
    if (canvas.value !== null) stackThree(canvas.value);
});
</script>

<template>
    <p class="mt-32 justify-end items-center uppercase flex gap-2 xl:px-0 px-2 tracking-widest">
        <span class="text-lg">+</span> {{ $t("stack.title") }}
    </p>
    <section class=" w-full h-[450px] border-[1px] border-white relative">
        <canvas ref="canvas" class="w-full h-full" />
        <transition>
            <div v-if="showStack"
                class="w-full h-full absolute top-0 left-0 grid lg:grid-cols-3 grid-cols-2 sm:p-8 p-4 lg:gap-8 gap-4 bg-black/50">
                <my-cell v-for="(item, index) in myStack" :key="index" :text="item" :index="index" />
            </div>
        </transition>
    </section>
    <button @click="showStack = !showStack"
        class="lg:text-[1.6vw] text-lg leading-none tracking-widest bg-transparent hover:bg-white border-[1px] border-white transition-colors px-4 py-2 hover:text-[#0e0e0e] text-white mb-32 mx-auto mt-4 w-max block">{{
            showStack ? $t('stack.button_hide') : $t('stack.button_show') }}
        {{ $t('stack.button') }}</button>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>