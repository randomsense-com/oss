import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../pages/NotFound.vue'

const site_name = 'RandomSense OSS'

// pagesディレクトリ内のすべてのVueファイルを動的にインポート
const pages = import.meta.glob('../pages/*.vue')

// ルートの生成
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
    ...routes,
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFound,
      meta: {
        title: '404 Not Found',
        requiresAuth: false
      }
    }
  ]
})

// ナビゲーションガード
router.beforeEach((to, from, next) => {
  // タイトルの設定
  document.title = `${to.meta.title} | ${site_name}`

  next()
})

// エラーハンドリング
router.onError((error) => {
  console.error('Router error:', error)
  // エラーページへのリダイレクトやエラーハンドリングのロジックを追加
})

export default router