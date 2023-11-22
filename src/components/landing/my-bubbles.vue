<script setup lang="ts">
function getRandomData() {
  return {
    size: Math.random() * 100 + 20,
    position: Math.random() * 100,
    duration: (Math.random() + 2) * 3,
    delay: Math.random() * 10 - 4,
    wobbleTime: Math.floor(Math.random() * 6) + 2,
  };
}
</script>

<template>
  <section
    class="absolute w-screen h-[100dvh] top-0 left-0 z-[5] overflow-hidden pointer-events-none select-none"
  >
    <div
      v-for="item in 8"
      :key="item"
      :style="`left: ${getRandomData().position}%; 
      animation-duration: ${getRandomData().duration}s; 
      animation-delay: ${getRandomData().delay}s`"
      class="opacity-50 animate-translation absolute transition-all w-max invisible"
    >
      <div
        class="animate-bubble aspect-square rounded-full bg-blue-500 transition-all"
        :style="`width: ${getRandomData().size}px; 
        animation-duration: ${getRandomData().wobbleTime}s;`"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.animate-translation {
  animation-name: anim;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  -webkit-animation-name: anim;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-iteration-count: infinite;
}
.animate-bubble {
  animation-name: horizotal-woble;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  -webkit-animation-name: horizotal-woble;
  -webkit-animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
}

@keyframes horizotal-woble {
  from {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }
}

@keyframes anim {
  0% {
    bottom: -160px;
    visibility: visible;
  }

  100% {
    bottom: 100%;
    visibility: visible;
  }
}
</style>
