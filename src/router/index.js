import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/savingscheme/:slug',
    name: 'savingscheme',
    // route level code-splitting
    // this generates a separate chunk (savingscheme.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "savingscheme" */ '../views/SavingSchemeView.vue'),
  props:true
  },
  {
    path: '/posts/:slug',
    name: 'posts',
    // route level code-splitting
    // this generates a separate chunk (posts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "posts" */ '../views/PostsView.vue'),
    props:true
  },
  // {
  //   path: '/message',
  //   name: 'message',
  //   // route level code-splitting
  //   // this generates a separate chunk (message.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "message" */ '../views/messageView.vue')
  // },
  // {
  //   path: '/services',
  //   name: 'services',
  //   // route level code-splitting
  //   // this generates a separate chunk (services.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
  // },
  {
    path: '/reports',
    name: 'reports',
    // route level code-splitting
    // this generates a separate chunk (reports.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reports" */ '../views/ReportsView.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    // route level code-splitting
    // this generates a separate chunk (notice.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notice" */ '../views/NoticeView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    // route level code-splitting
    // this generates a separate chunk (gallery.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gallery" */ '../views/GalleryView.vue')
  },
  // {
  //   path: '/download',
  //   name: 'download',
  //   // route level code-splitting
  //   // this generates a separate chunk (download.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "download" */ '../views/DownloadView.vue')
  // },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (news.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/EventView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/scheme',
    name: 'scheme',
    // route level code-splitting
    // this generates a separate chunk (scheme.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "scheme" */ '../views/SchemeView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
