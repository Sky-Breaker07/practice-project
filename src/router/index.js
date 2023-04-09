import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Pages/Home.vue'
import CalendarApp from '../Pages/CalendarApp.vue'
import DcHeroes from '../Pages/DcHeroes.vue'
import Markdown from '../Pages/Markdown.vue'
import Slider from '../Pages/Slider.vue'
import Calculator from '../Pages/Calculator.vue'
import Modal from '../Pages/ReusableModal.vue'
import Quiz from '../Pages/Quiz.vue'
import CGPA from '../Pages/CGPA.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/DcHeroes',
      name: 'DcHeroes',
      component: DcHeroes
    },
    {
      path: '/CalendarApp',
      name: 'CalendarApp',
      component: CalendarApp
    },
    {
      path: '/Markdown',
      name: 'Markdown',
      component: Markdown,
      // component: () => import('../Pages/Markdown.vue')
    },
    {
      path: '/Slider',
      name: 'Slider',
      component: Slider,
    },
    {
      path: '/Calculator',
      name: 'Calculator',
      component: Calculator,
    },
    {
      path: '/Modal',
      name: 'Modal',
      component: Modal,
    },
    {
      path: '/Quiz',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: '/CGPA',
      name: 'CGPA',
      component: CGPA,
    },
  ]
})

export default router
