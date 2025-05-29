<template>
  <div class="paste-san">

    <main>
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>{{ title }}</h1>
            <p class="hero-description">{{ description }}</p>
            <div class="hero-buttons">
              <a :href="downloadUrl" class="btn btn-primary" aria-label="Download Paste-san plugin">
                Download
              </a>
              <a :href="sourceCodeUrl" class="btn btn-secondary" aria-label="View source code on GitHub">
                Source Code
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img src="/paste-san/preview.webp" 
                 alt="Paste-san plugin preview showing the interface and functionality" 
                 loading="lazy">
          </div>
        </div>
      </section>

      <section id="features" class="container">
        <h2>Key Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon" v-html="feature.icon"></div>
            <h3>{{ feature.title }}</h3>
            <p v-html="feature.description"></p>
          </div>
        </div>
      </section>

      <section id="faq" class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div v-for="faq in faqs" :key="faq.question" class="faq-item">
            <h3>{{ faq.question }}</h3>
            <p v-html="faq.answer"></p>
          </div>
        </div>
      </section>

      <Contact />

    </main>

    <BackToTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BackToTop from '../components/navigation/BackToTop.vue'
import Contact from '../components/section/Contact.vue'
import { useHead } from '@vueuse/head'

const title = 'Paste-san'
const description = 'WordPress Plugin to add \'Add HTML\' button to the visual editor.'
const downloadUrl = 'https://github.com/randomsense-com/paste-san/archive/refs/tags/v1.1.zip'
const sourceCodeUrl = 'https://github.com/randomsense-com/paste-san'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const features = [
  {
    icon: '<img src="../assets/paste-san/icon.png" alt="Paste-sanのアイコン" width="32" height="32" loading="lazy">',
    title: 'Add HTML Button',
    description: 'Add \'Add HTML\' button to the visual editor. No more switching to a text editor just to paste HTML.'
  },
  {
    icon: '🔧',
    title: 'Keyboard Shortcuts',
    description: 'Use the convenient <strong>Option+A</strong> (Mac) or <strong>Alt+A</strong> (Windows) shortcut for lightning-fast HTML pasting.'
  },
  {
    icon: '⚡',
    title: 'Lightweight',
    description: 'Minimal resource usage, no tracking, no ads.'
  }
]

const faqs = [
  {
    question: 'Q: How to customize keyboard shortcuts?',
    answer: 'A: Plugin Directory > Paste-san > paste-san-button.js > line 18'
  },
  {
    question: 'Q: Does the plugin collect any data?',
    answer: 'A: No, the plugin simply inserts the input data as HTML without any data collection or processing.'
  },
  {
    question: 'Q: The plugin doesn\'t work. What should I do?',
    answer: 'A: Please report the issue on our <a href="https://github.com/randomsense-com/paste-san/issues" target="_blank" rel="noopener">GitHub Issues page</a> with the URL and we\'ll investigate.'
  }
]

onMounted(() => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Paste-san",
    "description": description,
    "applicationCategory": "Plugin",
    "operatingSystem": "WordPress",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "RandomSense"
    },
    "softwareVersion": "1.1",
    "screenshot": "../assets/paste-san/preview.webp"
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})

useHead({
  title: 'Paste-san | RandomSense OSS',
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'WordPress Plugin, HTML Editor, Visual Editor' },
    { property: 'og:title', content: 'Paste-san | RandomSense OSS' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/paste-san/preview.webp' },
    { property: 'og:url', content: 'https://oss.randomsense.jp/paste-san' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Paste-san | RandomSense OSS' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: '/paste-san/preview.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://oss.randomsense.jp/paste-san' }
  ]
})

</script>