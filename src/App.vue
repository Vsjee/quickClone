<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <section class="container">
    <router-view></router-view>
  </section>
</template>

<style scoped>
.container {
  padding: 5rem 0;
}
</style>
