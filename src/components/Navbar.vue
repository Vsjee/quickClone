<script setup lang="ts"></script>

<template>
  <nav class="nav">
    <h2 class="nav__logo">Quick</h2>
    <ul class="nav__list">
      <li class="nav__list__item">Global</li>
      <li class="nav__list__item">Carga</li>
      <li class="nav__list__item">Distribución</li>
      <li class="nav__list__item">Última Milla</li>
      <li class="nav__list__item">SmartQuick</li>
      <li class="nav__list__item">Vincúlate</li>
      <li class="nav__list__item">Blog</li>
      <li class="nav__list__item">Contacto</li>
      <li class="nav__list__item">Idioma</li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  background-color: rgba(255, 255, 255, 0.062);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 0.5rem 0;
  backdrop-filter: blur(15px);
  z-index: 1;
}

.nav__list {
  display: inline-flex;
  gap: 0.7rem;
  list-style: none;
}

.nav__list__item {
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
