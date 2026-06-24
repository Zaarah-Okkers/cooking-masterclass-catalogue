<template>
  <header class="header">
    <h1>Cooking Masterclass</h1>

    <div class="wishlist">
      ❤️ Wishlist: {{ wishlistCount }} saved
    </div>
  </header>
</template>

<script setup>
defineProps({
  wishlistCount: Number
})
</script>