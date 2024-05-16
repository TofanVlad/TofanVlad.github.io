<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { footerThree } from "../threejs/footer";
import myContainer from "./my-container.vue";
import myLink from "./my-link.vue";

const canvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(() => {
    if (canvas.value !== null) footerThree(canvas.value);
});
</script>

<template>
    <canvas ref="canvas" class="w-screen h-screen absolute top-0 left-0 pointer-events-none"></canvas>
    <my-container class="md:pt-34 pt-24 md:pb-0 pb-12 flex flex-col items-center justify-around">

        <div class="aspect-[4/5] md:max-h-[455px] max-h-[350px]">
            <img src="/IMG_3788.png" alt="Tofan Vlad - Profile Picture"
                class="w-full h-full object-contain md:max-h-[615px] max-h-[350px]">
        </div>
        <div
            class="text-[#0e0e0e] bg-white px-8 py-4 lg:text-[3.6vw] md:text-5xl sm:text-[6.2vw] text-[5.6vw] text-center">
            + {{ $t('footer.title') }}
        </div>
        <div class="flex flex-col lg:w-[50%] w-[75%] gap-2">
            <p class="w-full border-b-[1px] border-white text-center lg:text-[1.6vw] text-2xl">{{ $t('footer.connect')
                }}</p>
            <div class="grid grid-cols-3 gap-8">
                <my-link text="GITHUB" href="https://github.com/TofanVlad" />
                <my-link text="LINKEDIN" href="https://www.linkedin.com/in/vlad-tofan-349b70291/"
                    class="place-self-center" />
                <my-link text="DISCORD" href="https://discordapp.com/users/284386100829487106" class="place-self-end" />
            </div>
        </div>
        <a href="mailto:tofanvladit@gmail.com"
            class="lg:text-[3.6vw] text-4xl h-max lg:leading-[3.6vw] tracking-widest overflow-hidden relative before:bottom-0 before:-left-full before:absolute before:content-[''] before:bg-white before:h-[2px] before:w-full hover:before:translate-x-full before:transition-transform">
            TOFANVLADIT<br class="md:hidden block" />@GMAIL.COM</a>
    </my-container>
</template>

<style scoped>
.perspective {
    perspective: 800px;
}
</style>