import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import Print from '../Pages/Print.vue';
import Stamp from '../Pages/Stamp.vue';
import Header from '../components/Layout/Header.vue';
import Footer from '../components/Layout/Footer.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    header: Header,
    footer: Footer
  },
  {
    path: '/print',
    name: 'Print',
    component: Print,
    header: Header,
    footer: Footer
  },
  {
    path: '/stamp',
    name: 'Stamp',
    component: Stamp,
    header: Header,
    footer: Footer
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
