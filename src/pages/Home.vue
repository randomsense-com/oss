<template>
  <main>
    <section id="about" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>RandomSense OSS</h1>
          <p class="hero-description">RandomSense ❤️ Open Source Software</p>
          <div class="hero-buttons">
            <a href="#products" class="btn btn-primary">Explore Products</a>
            <a href="https://github.com/randomsense-com" class="btn btn-secondary" target="_blank" rel="noopener">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="products" class="container">
      <h2>Featured OSS Products</h2>
      <div class="products-grid">
        <article class="product-card">
          <div class="product-header">
            <div class="product-icon" aria-hidden="true">⌥</div>
            <div class="product-meta">
              <h3>ASIN Quick Copy</h3>
              <span class="product-category">Chrome Extension</span>
            </div>
          </div>
          <p class="product-description">Quickly copy Amazon ASIN codes with keyboard shortcuts.</p>
          <div class="product-features">
            <span class="feature-tag">Chrome Extension</span>
            <span class="feature-tag">Keyboard Shortcuts</span>
          </div>
          <div class="product-actions">
            <router-link to="/asin-quick-copy" class="btn btn-primary">Learn More</router-link>
            <a href="https://github.com/randomsense-com/asin-quick-copy" class="btn btn-outline" target="_blank"
              rel="noopener">
              <span class="btn-icon">🔗</span>
              Source
            </a>
          </div>
        </article>

        <article class="product-card">
          <div class="product-header">
            <div class="product-icon">
              <img src="/paste-san/icon.png" alt="Paste-sanのアイコン" width="32" height="32" loading="lazy">
            </div>
            <div class="product-meta">
              <h3>Paste-san</h3>
              <span class="product-category">WordPress Plugin</span>
            </div>
          </div>
          <p class="product-description">Added "Add HTML" button to the visual editor. No more switching to a text
            editor just to paste HTML.</p>
          <div class="product-features">
            <span class="feature-tag">WordPress Plugin</span>
            <span class="feature-tag">Visual Editor</span>
            <span class="feature-tag">TinyMCE</span>
          </div>
          <div class="product-actions">
            <router-link to="/paste-san" class="btn btn-primary">Learn More</router-link>
            <a href="https://github.com/randomsense-com/paste-san" class="btn btn-outline" target="_blank"
              rel="noopener">
              <span class="btn-icon" aria-hidden="true">🔗</span>
              Source
            </a>
          </div>
        </article>

        <article class="product-card coming-soon">
          <div class="product-header">
            <div class="product-icon" aria-hidden="true">🚀</div>
            <div class="product-meta">
              <h3>More Products Coming</h3>
              <span class="product-category">Various Tools</span>
            </div>
          </div>
          <p class="product-description">We're working on more useful tools and extensions. Stay tuned for updates on
            productivity tools, developer utilities, and more.</p>
          <div class="product-actions">
            <a href="https://github.com/randomsense-com" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <span class="btn-icon" aria-hidden="true">👀</span>
              Watch on GitHub
            </a>
          </div>
        </article>
      </div>
    </section>

    <Contact />
  </main>
</template>

<script setup>
import Contact from '../components/section/Contact.vue'
</script>

<style scoped lang="scss">
// ホームページのスタイル
</style> 