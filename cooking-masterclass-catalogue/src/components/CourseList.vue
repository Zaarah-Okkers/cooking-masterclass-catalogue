<template>
  <div class="course-grid">
    <CourseCard
      v-for="course in courses"
      :key="course.id"
      :course="course"
      @save-course="$emit('save-course', $event)"
    />
  </div>
</template>

<script setup>
import CourseCard from './CourseCard.vue'

defineProps({
  courses: Array
})
</script>