import Vue from 'vue';
import Router from 'vue-router';

// @ts-ignore
import Home from './views/home/Home.vue';
// @ts-ignore
import About from './views/about/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
