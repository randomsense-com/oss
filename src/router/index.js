import { createRouter, createWebHistory } from 'vue-router'
const site_name = 'RandomSense OSS'
const pages = import.meta.glob('../pages/*.vue')

const routes = Object.entries(pages).map(([path, component]) => {
  const name = path.match(/\.\.\/pages\/(.+)\.vue$/)[1]
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')

  return {
    path: name === 'home' ? '/' : `/${name}`,
    name: name,
    component,
    meta: {
      title: name.charAt(0).toUpperCase() + name.slice(1),
      requiresAuth: false
    }
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | ${site_name}`
  window.scrollTo(0, 0)
  next()
})

router.onError((error) => {
  console.error('Router error:', error)
})

export default router