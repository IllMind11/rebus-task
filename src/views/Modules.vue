<script setup>
import { useRouter } from "vue-router";

import Layout from "../components/Layout.vue";
import ModuleItem from "../components/ModuleItem.vue";

const router = useRouter();

function handleClick(moduleNumber) {
  router.push({
    name: "Module Info",
    path: `/course/modules/`,
    params: {
      id: moduleNumber,
    },
  });
}
</script>

<template>
  <Layout>
    <p>
      <RouterLink to="/">Курсы</RouterLink> /
      <span class="text-violet-500">Модули</span>
    </p>

    <h1 class="text-2xl font-bold mt-2 mb-8">Модули</h1>

    <div class="w-full h-18 p-2 flex items-center gap-3 bg-white rounded-xl">
      <img
        class="w-14 h-14 rounded-lg"
        src="../assets/images/pic-1.jpg"
        alt=""
      />

      <div class="h-fit">
        <p class="text-sm text-gray-400">14 модулей</p>
        <h3 class="text-xs md:text-sm font-bold">
          Курс по повышению квалификации учителей
        </h3>
      </div>
    </div>

    <div
      class="w-full h-4/6 mt-8 bg-white rounded-lg shadow-sm flex flex-col overflow-hidden"
    >
      <div
        class="w-full px-2 md:px-24 border-b bg-indigo-100 border-gray-100 flex justify-between"
      >
        <h2 class="w-max h-full py-2 font-semibold">Название модуля</h2>

        <h2 class="w-max h-full py-2 font-semibold">Процент прохождения</h2>
      </div>

      <div class="p-2">
        <template v-for="i in 3">
          <ModuleItem @click="() => handleClick(i)" :moduleNumber="i" />
        </template>
      </div>
    </div>
  </Layout>
</template>
