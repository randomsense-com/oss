import { createApp } from 'vue'
import { createHead, useHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import 'ress/dist/ress.min.css'

const app = createApp(App)
const head = createHead()

useHead({
  title: 'RandomSense OSS',
  meta: [
    { name: 'description', content: 'Discover open source products by RandomSense.' },
    { name: 'author', content: 'RandomSense' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'RandomSense OSS' },
    { property: 'og:description', content: 'Discover open source products by RandomSense.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://oss.randomsense.jp/' }
  ],
  link: [
    { rel: 'canonical', href: 'https://oss.randomsense.jp/' }
  ]
})

app.use(router)
app.use(head)
app.mount('#app') 