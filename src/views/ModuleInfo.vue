<script setup>
import { useRoute } from "vue-router";

import Layout from "../components/Layout.vue";

const route = useRoute();
</script>

<template>
  <Layout bg-color="bg-white">
    <p>
      <RouterLink to="/">Курсы</RouterLink> /
      <RouterLink to="/course/modules">Модули</RouterLink> /
      <span class="text-violet-500">
        Модуль
        {{ route.params.id }}. Курс по повышению квалификации учителей
      </span>
    </p>

    <div class="mt-6 flex justify-between items-center gap-3 flex-wrap">
      <div class="md:flex-1 flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold mt-2 self-start">
          Модуль {{ route.params.id }}
        </h1>
        <h2 class="text-xl font-bold self-start mb-12">
          Курс по повышению квалификации учителей
        </h2>

        <div class="self-center px-3 py-2 bg-violet-100 rounded-xl">
          <p class="text-lg font-bold">Добро пожаловать в изучении модуля!</p>
        </div>

        <img class="w-4/6" src="../assets/images/1.jpg" alt="image" />

        <p class="mt-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          voluptate porro nobis voluptatem minus, dolore accusantium tempora
          exercitationem autem facilis quisquam! Aliquam, voluptatibus saepe?
          Optio vel magni cupiditate tempore hic.
        </p>
      </div>

      <div class="flex-1 flex justify-center items-center">
        <div
          class="w-64 sm:w-72 p-3 flex flex-col justify-center items-center gap-5 border border-violet-300 rounded-lg"
        >
          <div class="w-full flex items-center justify-between">
            <p>Содержание модуля</p>
            <p>x</p>
          </div>

          <div class="w-full">
            <div class="w-full flex items-center justify-between">
              <p>1/6 пройдено</p>
              <p>🏆</p>
            </div>

            <div class="w-full h-1 mt-2 rounded-3xl bg-violet-100">
              <div class="w-1/4 h-full rounded-xl bg-violet-500"></div>
            </div>
          </div>

          <ol class="w-full flex flex-col gap-3">
            <li class="w-full flex items-center justify-between">
              <p class="text-violet-500">1. Ознакомление с модулем</p>
              <p>✔</p>
            </li>
            <li class="w-full flex items-center justify-between">
              <p>2. Ознакомление с модулем</p>
              <p>✔</p>
            </li>
            <li class="w-full flex items-center justify-between">
              <p>3. Ознакомление с модулем</p>
              <p>✔</p>
            </li>
            <li class="w-full flex items-center justify-between">
              <p>4. Ознакомление с модулем</p>
              <p>✔</p>
            </li>
            <li class="w-full flex items-center justify-between">
              <p>5. Ознакомление с модулем</p>
              <p>✔</p>
            </li>
            <li class="w-full flex items-center justify-between">
              <p>6. Ознакомление с модулем</p>
              <p>✔</p>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div class="w-full mt-8 md:mt-24 flex justify-center">
      <button
        class="px-8 py-3 rounded-xl bg-violet-500 text-white text-semibold"
      >
        Начать изучение модуля
      </button>
    </div>
  </Layout>
</template>
