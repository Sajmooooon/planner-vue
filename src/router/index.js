import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProjectView from "@/views/AddProjectView";
import EditProjectView from "@/views/EditProjectView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'addProject',
    component: AddProjectView
  },
  {
    path: '/project/:id',
    name: 'editProject',
    component: EditProjectView,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
