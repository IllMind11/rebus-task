<script setup>
import { useRouter } from "vue-router";

import CourseCard from "../components/CourseCard.vue";
import Layout from "../components/Layout.vue";

const router = useRouter();

function handleClick() {
  router.push({
    name: "Modules",
    path: "/course/modules",
  });
}
</script>

<template>
  <Layout>
    <h1 class="text-2xl font-bold mb-8">Курсы</h1>

    <div class="w-full h-5/6 bg-white rounded-lg shadow-sm flex flex-col">
      <div class="w-full px-6 border-b border-gray-100">
        <h2
          class="w-max h-full py-2 text-xs text-violet-600 font-semibold border-b border-violet-600"
        >
          Мои курсы
        </h2>
      </div>

      <div
        class="px-6 py-2 mt-4 flex justify-center items-center flex-wrap gap-10"
      >
        <template v-for="i in 4">
          <CourseCard
            @click="handleClick"
            title="Курс по повышению квалификации учителей"
            modules="14"
          />
        </template>
      </div>
    </div>
  </Layout>
</template>
