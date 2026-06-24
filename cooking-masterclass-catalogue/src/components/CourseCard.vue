<template>
  <div class="card">
    <img :src="course.image" :alt="course.title" />

    <h2>{{ course.title }}</h2>

    <p><strong>Chef:</strong> {{ course.chef }}</p>

    <p><strong>Level:</strong> {{ course.level }}</p>

    <p><strong>Price:</strong> R{{ course.price }}</p>

    <p
      :class="course.available ? 'available' : 'sold-out'"
    >
      {{ course.available ? "Available" : "Sold Out" }}
    </p>

    <button
      @click="$emit('save-course', course.id)"
      :disabled="!course.available"
    >
      Save to Wishlist
    </button>
  </div>
</template>

<script setup>
defineProps({
  course: Object
})
</script>