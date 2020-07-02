import Vue from 'vue'
import VueRouter from 'vue-router'
import Views from '@/views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '/home',
        name: 'Home',
        redirect: '/home/my',
        component: Views.Home,
        children: [
          {
            path: '/home/my',
            name: 'Edit',
            component: Views.My
          },
          {
            path: '/home/edit/:id',
            name: 'Edit',
            component: Views.Edit
          },
          {
            path: '/home/document',
            name: 'Document',
            component: Views.Document
          },
          {
            path: '/home/example',
            name: 'Example',
            component: Views.Example
          }
          // {
          //   path: '/home/plan',
          //   name: 'Plan',
          //   component: () => import(/* webpackChunkName: "plain" */ '@/document/plain.md')
          // }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
