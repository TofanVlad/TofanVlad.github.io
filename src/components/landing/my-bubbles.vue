<script setup lang="ts">
function getRandomData() {
  return {
    size: Math.random() * 100 + 20,
    position: Math.random() * 100,
    duration: (Math.random() + 2) * 5,
    delay: Math.random() * 10,
  };
}
</script>

<template>
  <section
    class="absolute w-screen h-[100dvh] top-0 left-0 z-[5] overflow-hidden"
  >
    <div
      v-for="item in 12"
      :key="item"
      :style="`left: ${getRandomData().position}%; animation-duration: ${
        getRandomData().duration
      }s; animation-delay: ${getRandomData().delay}s`"
      class="opacity-50 animate-translation absolute transition-all w-max invisible"
    >
      <div
        class="animate-bubble aspect-square rounded-full bg-blue-500 transition-all"
        :style="`width: ${getRandomData().size}px; animation-duration: ${
          getRandomData().duration / 3
        }s;`"
      ></div>
    </div>
  </section>
</template>

<style scoped>
span {
  background: red;
  aspect-ratio: 1 / 1;
}

.animate-translation {
  animation-name: anim;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
}
.animate-bubble {
  animation-name: horizotal-woble;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes horizotal-woble {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
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
