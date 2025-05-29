<template>
  <header>
    <div class="container">
      <nav role="navigation" aria-label="Main navigation">
        <div class="logo">
          <a href="/">RandomSense OSS</a>
        </div>
        <HamburgerMenu v-model:isOpen="isMenuOpen" />
        <ul class="nav-links" :class="{ active: isMenuOpen }">
          <li v-for="link in navigationLinks" :key="link.href">
            <a :href="link.href" @click="closeMenu">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import HamburgerMenu from '../navigation/HamburgerMenu.vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const navigationLinks = [
  { href: '#about', text: 'About' },
  { href: '#products', text: 'Products' },
  { href: '#contact', text: 'Contact' }
]
</script>

<style scoped lang="scss">
header {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow);
  height: 65px;
}

header .container {
  height: 100%;
  display: flex;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease;

    &:hover {
      color: var(--text-secondary);
    }
  }
}

.nav-links {
  display: flex;
  gap: 1rem;
  list-style: none;

  a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: var(--primary);
    }
  }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: var(--bg-primary);
    opacity: 0.9;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: top 0.3s ease;
    z-index: 999;

    a {
      padding: 30px;
    }
  }

  .nav-links.active {
    top: 80px;
  }

  .nav-links li {
    margin: 20px 0;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
  }

  .nav-links.active li {
    opacity: 1;
    transform: translateY(0);
  }

  @for $i from 1 through 3 {
    .nav-links li:nth-child(#{$i}) {
      transition-delay: #{$i * 0.1}s;
    }
  }
}
</style>