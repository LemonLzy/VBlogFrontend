import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import ArticleView from '@/views/ArticleView.vue'
import DraftView from '@/components/DraftView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/article/new',
        name: 'new',
        component: ArticleView
      },
      {
        path: '/article/draft',
        name: 'draft',
        component: DraftView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
