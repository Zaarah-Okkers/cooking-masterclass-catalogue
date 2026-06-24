<script setup>
import Header from '../components/Header.vue'
import CourseList from '../components/CourseList.vue'
import { computed } from 'vue'
import store from '../stores'

const courses = computed(() => store.state.courses)
const wishlist = computed(() => store.state.wishlist)

function saveCourse(courseId) {
  store.commit('addToWishlist', courseId)
}
</script>

<template>
  <main>
    <Header :wishlistCount="wishlist.length" />
    <CourseList :courses="courses" @save-course="saveCourse" />

    <section class="wishlist-section" v-if="wishlist.length">
      <h2>Your Wishlist</h2>
      <ul>
        <li v-for="course in wishlist" :key="course.id">
          {{ course.title }} — {{ course.chef }}
        </li>
      </ul>
    </section>
  </main>
</template>
