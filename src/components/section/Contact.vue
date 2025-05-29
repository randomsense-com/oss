<template>
<section id="contact">
  <div class="container">
    <h2>Contact</h2>
    <p>If you have any questions or feedback, please contact us via the email below.</p>
    <p>ß → @</p>
    <div class="contact-email">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      ossßrandomsense.jp
    </div>
  </div>
</section>
</template>

<script setup>
</script>

<style scoped lang="scss">
#contact {
  padding: 4rem 0;
  background: var(--bg-primary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  text-align: center;
  margin: 2rem 0 0;
  h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  }
  p {
  color: var(--text-secondary);
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  }
}

#contact .container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-email {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 1rem 0;
  word-break: break-all;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 768px) {
  .contact-email {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    width: 90%;
    margin: 1rem auto;
  }
}

.contact-email svg {
  width: 24px;
  height: 24px;
  color: var(--primary);
}
</style>