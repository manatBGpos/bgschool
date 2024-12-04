import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../components/Home.vue'
const routes = [
  { path: '/',name:'home' ,  component: Home },

]
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

 export  default router;