import { createRouter, createWebHistory } from 'vue-router';
import Left from "./components/Left.vue";
import Right from './components/Right.vue';
import Middle from "./components/Middle.vue"

const routes = [
  { path: '/', component: Middle },
  { path: '/left', component: Left },
  { path: '/right', component: Right },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;