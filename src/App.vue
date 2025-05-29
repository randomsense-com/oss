<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import BackToTop from './components/navigation/BackToTop.vue'
</script>

<style lang="scss">
@use './assets/main.scss';
</style>