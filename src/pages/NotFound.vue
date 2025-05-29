<template>
  <main class="error-main">
    <div class="error-content">

      <div class="error-text">
        <h1>404 - Page Not Found</h1>
        <p class="error-description">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div class="error-actions">
        <a href="/" class="btn btn-primary">
          Go Home
        </a>
      </div>

    </div>
  </main>

</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: '404 Not Found',
  meta: [
    { name: 'description', content: 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.' },
    { property: 'og:title', content: '404 Not Found' },
    { property: 'og:description', content: 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.' }
  ]
})
</script>

<style scoped lang="scss">
.error-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  min-height: calc(100vh - 140px);
}

.error-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.error-text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.error-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
}
</style>