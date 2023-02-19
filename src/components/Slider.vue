<script setup lang="ts">
import { ref } from 'vue';
import { sliderData } from '../data/sliderData.data';
import '@splidejs/vue-splide/css/sea-green';

const data = ref(sliderData);
</script>

<template>
  <section class="slider">
    <Splide :options="{ rewind: true, type: 'loop', autoplay: true }" aria-label="data">
      <SplideSlide v-for="item in data" class="container">
        <img :src="item.img" :alt="item.title" class="container__img" />
        <article class="container__info">
          <h1 class="container__info--title">{{ item.title }}</h1>
          <p class="container__info--text">{{ item.text }}</p>
        </article>
      </SplideSlide>
    </Splide>
  </section>
</template>

<style scoped>
.slider,
.container__img,
.container__info--title {
  transition: 0.5s ease-in-out;
}
.slider {
  width: 80%;
  margin: 0 auto;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__img {
  width: 400px;
}
.container__info {
  display: grid;
  gap: 1rem;
}
.container__info--title {
  font-size: 2rem;
}

@media screen and (max-width: 1000px) {
  .slider {
    width: 100%;
  }
}
@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
  }

  .container__info--text,
  .container__info--title {
    width: 100%;
  }
}
@media screen and (max-width: 550px) {
  .container__img {
    width: 100%;
  }
  .container__info--title {
    font-size: 1.4rem;
  }
}
</style>
