<template>
  <footer>
    <p>&copy; 2025 RandomSense. All rights reserved.</p>
  </footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border);
  padding: 3rem 0 1rem;
  margin-top: auto;
  position: sticky;
  top: 100vh;
  width: 100%;

  p {
    text-align: center;
    color: var(--text-muted);
    font-size: 0.875rem;
  }
}
</style>