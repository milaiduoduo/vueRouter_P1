import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Layout from '@/components/layoutbackend';
import Doc from '@/views/doc';
import Project from '@/views/project';
import Workbench from '@/views/workbench';
import Login from '@/views/login';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/management',
      name: 'Management',
      component: Layout,
      children: [
        {
          path: '/doc',
          name: 'Doc',
          component: Doc
        },
        {
          path: '/project',
          name: 'Project',
          component: Project
        },
        {
          path: '/workbench',
          name: 'Workbench',
          component: Workbench
        }
      ]
    }
  ]
})

export default router
