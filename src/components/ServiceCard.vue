<script setup lang="ts">
import { IServiceCard } from '../types';

defineProps<{ serviceItem: IServiceCard }>();
</script>

<template>
  <button class="card">
    <picture>
      <img :src="serviceItem.img" alt="serviceItem.title" class="img" />
    </picture>
    <h3 class="card__title">{{ serviceItem.title }}</h3>
    <p class="card__subtitle">
      <strong>{{ serviceItem.subTitle }}</strong>
    </p>
    <p class="card__info">{{ serviceItem.info }}</p>
  </button>
</template>

<style scoped>
.card {
  cursor: pointer;
  background: transparent;
  color: #000;
  border: none;
  width: 225px;
  display: grid;
  gap: 0.8rem;
  margin: 0.5rem;
}
.card picture {
  display: grid;
  place-content: center;
}
.img {
  width: 160px;
  height: 160px;
}

.card__title,
.card__subtitle,
.card__info {
  text-align: center;
}

@media screen and (max-width: 570px) {
  .card {
    width: 98%;
    margin: 0;
  }
  .img {
    width: 100px;
    height: 100px;
  }
}
</style>
