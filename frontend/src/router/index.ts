import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import MangaDetails from '@pages/MangaDetails.vue'

const routes = [
  {
    path: '/',
    alias: '/mangas',
    component: HomePage
  }, 
  {
    path:'/mangas/:id',
    component: MangaDetails
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})