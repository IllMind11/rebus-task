<script setup>
const { moduleNumber } = defineProps({
  moduleNumber: Number,
});

defineEmits(["click"]);
</script>

<template>
  <div
    @click="$emit('click')"
    class="w-full h-18 p-2 flex items-center gap-3 bg-white rounded-xl cursor-pointer hover:drop-shadow"
  >
    <div class="w-32">
      <img src="../assets/images/1.jpg" alt="" />
    </div>

    <div class="mr-auto">
      <h2 class="font-bold text-sm md:text-lg">Модуль {{ moduleNumber }}</h2>
      <p class="font-semibold text-xs md:text-sm">
        Курс по повышению квалификации учителей
      </p>
    </div>

    <div
      class="w-18 h-18 rounded-full p-2 py-2 flex justify-center items-center bg-green-400"
    >
      <div
        class="bg-white w-full h-full px-1 py-2 md:px-2 md:py-4 rounded-full flex justify-center items-center"
      >
        <p class="font-semibold">100%</p>
      </div>
    </div>
  </div>
</template>
