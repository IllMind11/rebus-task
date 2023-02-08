<script setup>
const { title, modules } = defineProps({
  title: String,
  modules: String,
});

defineEmits(["click"]);
</script>

<template>
  <div
    @click="$emit('click')"
    class="w-64 flex flex-col cursor-pointer rounded-xl p-2 hover:shadow-md"
  >
    <div>
      <img class="rounded-md" src="../assets/images/pic-1.jpg" alt="picture" />

      <p class="text-sm text-gray-400 pt-2">{{ modules }} модулей</p>
      <h3 class="text-sm md:text-base font-bold">{{ title }}</h3>
    </div>

    <div class="w-full h-1 mt-2 rounded-3xl bg-violet-100">
      <div class="w-1/4 h-full rounded-xl bg-violet-500"></div>
    </div>
    <p class="text-xs mt-2 self-end">25%</p>
  </div>
</template>
