<template>
  <div class="asin-quick-copy">
    <main>
      <section class="hero">
        <div class="container">
          <div class="hero-content">
            <h1>ASIN Quick Copy</h1>
            <p class="hero-description">Chrome extension to quickly copy ASIN from Amazon product page.</p>
            <div class="hero-buttons">
              <a href="https://chromewebstore.google.com/detail/asin-quick-copy/kjappjpglopialeknohnchepafbedfho"
                class="btn btn-primary" aria-label="Download ASIN Quick Copy extension">
                Install
              </a>
              <a href="https://github.com/randomsense-com/asin-quick-copy" class="btn btn-secondary"
                aria-label="View source code on GitHub">
                Source Code
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img src="/asin-quick-copy/preview.jpg"
              alt="ASIN Quick Copy extension preview showing the interface and functionality">
          </div>
        </div>
      </section>

      <section id="features" class="container">
        <h2>Key Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import Contact from '../components/section/Contact.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const features = [
  {
    icon: '📋',
    title: 'Instant ASIN Copy',
    description: 'Automatically detects and copies the ASIN of any Amazon product page to your clipboard with a single click.'
  },
  {
    icon: '⚡',
    title: 'Keyboard Shortcuts',
    description: 'Use the convenient <strong>Alt+A</strong> (Windows) or <strong>Option+A</strong> (Mac) shortcut for lightning-fast ASIN copying.'
  },
  {
    icon: '🔧',
    title: 'Lightweight',
    description: 'Minimal resource usage, no tracking, no ads.'
  },
  {
    icon: '🎯',
    title: 'Smart Detection',
    description: 'Works on all Amazon domains and automatically recognizes ASIN codes from various Amazon page formats.'
  },
  {
    icon: '🌐',
    title: 'Multi-Domain Support',
    description: 'Compatible with Amazon.com, Amazon.co.jp, Amazon.co.uk, Amazon.de, and other Amazon regional sites.'
  }
]

const faqs = [
  {
    question: 'Q: How do I install the extension?',
    answer: 'A: Download the ZIP file, extract it, then go to Chrome Extensions (chrome://extensions/), enable Developer Mode, and click "Load unpacked" to select the extracted folder.'
  },
  {
    question: 'Q: How to customize keyboard shortcuts?',
    answer: 'A: Go to Chrome Extension Settings Page: <code>chrome://extensions/shortcuts</code> and modify the shortcut for ASIN Quick Copy.'
  },
  {
    question: 'Q: Which Amazon sites are supported?',
    answer: 'A: The extension works on all major Amazon domains including .com, .co.jp, .co.uk, .de, .fr, .it, .es, .ca, .com.au, and more.'
  },
  {
    question: 'Q: What is an ASIN?',
    answer: 'A: ASIN (Amazon Standard Identification Number) is a unique 10-character alphanumeric identifier assigned by Amazon to each product in their catalog.'
  },
  {
    question: 'Q: Does the extension collect any data?',
    answer: 'A: No, the extension does not implement data transmission functionality and is completed within the browser.'
  }
]

onMounted(() => {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ASIN Quick Copy",
    "description": "Chrome extension to quickly copy ASIN from Amazon product page.",
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "Chrome Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "RandomSense"
    },
    "downloadUrl": "https://chromewebstore.google.com/detail/asin-quick-copy/kjappjpglopialeknohnchepafbedfho",
    "softwareVersion": "1.0",
    "screenshot": "/assets/asin-quick-copy/preview.jpg"
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(jsonLd)
  document.head.appendChild(script)
})

useHead({
  title: 'ASIN Quick Copy | RandomSense OSS',
  meta: [
    { name: 'description', content: 'Chrome extension to quickly copy ASIN from Amazon product page.' },
    { name: 'keywords', content: 'Chrome Extension, Amazon, ASIN, Copy Tool' },
    // Open Graph
    { property: 'og:title', content: 'ASIN Quick Copy | RandomSense OSS' },
    { property: 'og:description', content: 'Chrome extension to quickly copy ASIN from Amazon product page.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/asin-quick-copy/preview.jpg' },
    { property: 'og:url', content: 'https://oss.randomsense.jp/asin-quick-copy' },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'ASIN Quick Copy | RandomSense OSS' },
    { name: 'twitter:description', content: 'Chrome extension to quickly copy ASIN from Amazon product page.' },
    { name: 'twitter:image', content: '/asin-quick-copy/preview.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://oss.randomsense.jp/asin-quick-copy' }
  ]
})
</script>