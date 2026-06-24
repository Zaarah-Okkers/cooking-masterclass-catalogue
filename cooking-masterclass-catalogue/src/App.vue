<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="site-header"></header>

  <RouterView />
</template>

<style scoped>
.site-header {
  height: 0;
  padding: 0;
  border: none;
}
</style>
