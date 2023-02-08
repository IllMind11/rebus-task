import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import "./assets/main.css";
import Course from "./views/Course.vue";
import Modules from "./views/Modules.vue";
import ModuleInfo from "./views/ModuleInfo.vue";

const routes = [
  { path: "/", name: "Courses", component: Course },
  { path: "/course/modules", name: "Modules", component: Modules },
  { path: "/course/modules/:id", name: "Module Info", component: ModuleInfo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
