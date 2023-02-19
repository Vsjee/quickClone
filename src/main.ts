import { createRouter, createWebHashHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import { publicRoutes } from './models';
import VueSplide from '@splidejs/vue-splide';

const routes = [
  { path: '/', component: () => import('./pages/Home.vue').then((p) => p.default) },
  {
    path: `/${publicRoutes.GLOBAL}`,
    component: () => import('./pages/Global.vue').then((p) => p.default),
  },
  {
    path: `/${publicRoutes.CARGA}`,
    component: () => import('./pages/Carga.vue').then((p) => p.default),
  },
  {
    path: `/${publicRoutes.DISTRIBUCION}`,
    component: () => import('./pages/Distribucion.vue').then((p) => p.default),
  },
  {
    path: `/${publicRoutes.ULTIMAMILLA}`,
    component: () => import('./pages/UltimaMilla.vue').then((p) => p.default),
  },
  {
    path: `/${publicRoutes.SMARTQUICK}`,
    component: () => import('./pages/SmartQuick.vue').then((p) => p.default),
  },
  {
    path: `/${publicRoutes.VINCULATE}`,
    component: () => import('./pages/Vinculate.vue').then((p) => p.default),
  },
  {
    path: `/${publicRoutes.BLOG}`,
    component: () => import('./pages/Blog.vue').then((p) => p.default),
  },
  {
    path: `/${publicRoutes.CONTACTO}`,
    component: () => import('./pages/Contacto.vue').then((p) => p.default),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(VueSplide);

app.mount('#app');
