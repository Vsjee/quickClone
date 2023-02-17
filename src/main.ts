import { createRouter, createWebHashHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const routes = [{ path: '/', component: () => import('./pages/Home.vue').then((p) => p.default) }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
