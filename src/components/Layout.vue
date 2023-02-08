<script setup>
const { bgColor } = defineProps({
  bgColor: {
    default: "bg-indigo-50",
  },
});
</script>

<template>
  <div class="w-full lg:h-screen p-1 md:p-8 flex justify-center align-center">
    <div :class="'w-full h-full px-1 md:px-8 rounded-xl ' + bgColor">
      <div class="w-full h-full p-1 md:p-8">
        <slot />
      </div>
    </div>
  </div>
</template>
