import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
<<<<<<< HEAD
import MangaDetails from '@pages/MangaDetails.vue'
=======
import MangaDetails from '@/pages/MangaDetails.vue'
>>>>>>> upstream/main

const routes = [
  {
    path: '/',
    alias: '/mangas',
    component: HomePage
  }, 
  {
<<<<<<< HEAD
    path:'/mangas/:id',
=======
    path: '/mangas/:id',
>>>>>>> upstream/main
    component: MangaDetails
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})