<template>
  <button 
    class="hamburger" 
    :class="{ active: isOpen }"
    aria-label="Menu" 
    :aria-expanded="isOpen"
    @click="toggle"
    @keydown="handleKeydown"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isOpen'])

const toggle = () => {
  emit('update:isOpen', !props.isOpen)
}

const handleKeydown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggle()
  }
}
</script>

<style scoped lang="scss">
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1000;

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--text-primary);
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -6px);
    }
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style> 