import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginRegister from '../views/LoginRegister.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginRegister,
  },
  {
    path: '/register',
    name: 'Register',
    component: LoginRegister,
    props: { login: false },
  },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
