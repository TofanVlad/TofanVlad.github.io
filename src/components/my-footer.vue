<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import { footerThree } from "../threejs/footer";
import myContainer from "./my-container.vue";
import myLink from "./my-link.vue";
import MyButton from "./my-button.vue";

const canvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(() => {
  if (canvas.value !== null) footerThree(canvas.value);
});
</script>

<template>
  <canvas
    ref="canvas"
    class="absolute top-0 left-0 w-screen h-screen pointer-events-none"
  ></canvas>
  <my-container
    class="flex flex-col items-center justify-around pt-24 pb-12 md:pt-34 md:pb-0"
  >
    <div class="aspect-[4/5] md:max-h-[455px] max-h-[350px]">
      <img
        src="/Me.jpg"
        alt="Tofan Vlad - Profile Picture"
        class="w-full h-full object-contain md:max-h-[615px] max-h-[350px]"
      />
    </div>
    <div
      class="text-[#0e0e0e] bg-white px-8 py-4 lg:text-[3.6vw] md:text-5xl sm:text-[6.2vw] text-[5.6vw] text-center"
    >
      + {{ $t("footer.title") }}
    </div>
    <div class="flex flex-col lg:w-[50%] xs:w-[75%] w-full xs:px-0 px-4 gap-2">
      <p
        class="w-full border-b-[1px] border-white text-center lg:text-[1.6vw] text-2xl"
      >
        {{ $t("footer.connect") }}
      </p>
      <div class="grid xs:grid-cols-4 grid-cols-2 xs:gap-8 gap-2">
        <my-link text="GITHUB" href="https://github.com/TofanVlad" />
        <my-link
          text="LINKEDIN"
          href="https://www.linkedin.com/in/vlad-tofan-349b70291/"
          class="xs:place-self-center place-self-end"
        />
        <my-link
          text="EMAIL"
          href="mailto:tofanvladit@gmail.com"
          class="xs:place-self-center"
        />
        <my-link
          text="TELEGRAM"
          href="https://t.me/tofanVlad"
          class="place-self-end"
        />
      </div>
      <my-button
        href="Tofan Vlad CV.pdf"
        download="Tofan Vlad CV.pdf"
        class="mt-4"
        >{{ $t("footer.download") }}</my-button
      >
    </div>
  </my-container>
</template>

<style scoped>
.perspective {
  perspective: 800px;
}
</style>
