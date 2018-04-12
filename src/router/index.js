import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Layout from '@/components/layoutbackend'
import Doc from '@/views/doc'
import Project from '@/views/project'
import Workbench from '@/views/workbench'
import Login from '@/views/login'

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
          path: '/project',
          name: 'Project',
          component: Project,
          meta: {
            needLogin: true
          }
        },
        {
          path: '/workbench',
          name: 'Workbench',
          component: Workbench,
          meta: {
            needLogin: true
          }
        },
        {
          path: '/doc',
          name: 'Doc',
          component: Doc,
          meta: {
            needLogin: false
          }
        }
      ]
    }
  ]
})

// 相当于路由拦截器的功能
// 实现功能：拦截必须登录才能看的url，经过判断登录后的才能进入，未登录则跳到登录页。
router.beforeEach((to, from, next) => {
  // to.matched 取到的是url匹配出来的组件和它的父组件obj
  let needLoginFlag = to.matched.some((item) => item.meta.needLogin)
  // console.log('to: ', to)
  // console.log('是否登录后才能使用：', flag)
  if (needLoginFlag) {
    // router.app 取到的是当前vue实例
    let info = router.app.$local_sf.fetch('vueRouter_p1')
    if (info.islogin) {
      console.log('已经登录过了！')
      next()
    } else {
      console.log('还没有登录！！！')
      router.push({
        path: '/login',
        query: { // 用query记录之前的这个页面
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    // console.log('不需要验证！！！')
    // console.log('to:::', to, 'form:::', from)
    next()
  }
})

export default router
