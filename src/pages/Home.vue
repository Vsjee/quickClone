<script setup lang="ts">
import { ref } from 'vue';
import { ServicesData } from '../data/ServicesData.data';
import ServiceCard from '../components/ServiceCard.vue';

const servicesData = ref(ServicesData);
</script>
<template>
  <section class="header">
    <article class="header__info">
      <h1 class="header__info--title">
        Plataforma digital que provee servicios logísticos de transporte y distribución
        <br /><strong>en Colombia</strong>
      </h1>
      <p class="header__info--text">
        Te conectamos con la Red Logística más grande de América, Quickers capacitados para
        transportar, distribuir o entregar tus productos.
      </p>
      <button class="header__info--btn">PÍDETE TU QUICKER</button>
    </article>
    <article class="header__animation">
      <picture class="header__animation__pic">
        <img src="../assets/phone.png" alt="phone" class="header__animation__pic--phone" />
      </picture>
    </article>
  </section>

  <section class="services">
    <article v-for="item in servicesData" class="services__cont">
      <ServiceCard :serviceItem="item" />
    </article>
  </section>
</template>

<!-- header section -->
<style scoped>
.header {
  display: flex;
  justify-content: center;
  padding: 0 5%;
}
.header__info,
.header__animation {
  width: 40%;
  transition: 0.8s ease;
}

/* header info */
.header__info {
  display: grid;
  place-content: center;
  gap: 1.5rem;
}
.header__info--title {
  font-weight: 300;
  line-height: 1.3;
  font-size: 2.5rem;
}
.header__info--title strong {
  background-color: #fdd402;
}
.header__info--text,
.header__info--btn {
  font-size: 1.2rem;
  transition: 0.6s ease;
}

.header__info--btn {
  background-color: #ff024e;
  width: 60%;
  cursor: pointer;
  padding: 0.3rem 0;
  border-radius: 15px;
  border: none;
  transition: 0.5s ease;
}
.header__info--btn:hover {
  background-color: #d6144e;
}

/* header animation */
.header__animation {
  display: grid;
  place-content: center;
}

/* queries */
@media screen and (max-width: 1000px) {
  .header__info {
    width: 65%;
  }
  .header__animation {
    width: 30%;
  }
}
@media screen and (max-width: 770px) {
  .header {
    flex-direction: column-reverse;
    align-items: center;
  }
  .header__animation,
  .header__info {
    width: 100%;
  }
}
@media screen and (max-width: 370px) {
  .header__info--btn {
    width: 100%;
  }
}
</style>

<!-- section Servicios de transporte y distribución  -->
<style scoped>
.services {
  width: 90%;
  margin: 12rem auto;
  display: flex;
  place-content: center;
  justify-content: space-around;

  transition: 0.7s ease-in-out;
}
.services__cont {
  display: grid;
  place-content: center;
}

@media screen and (max-width: 975px) {
  .services {
    display: grid;
    grid-auto-rows: 20rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  }
}
@media screen and (max-width: 791px) {
  .services {
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
  }
}
@media screen and (max-width: 570px) {
  .services {
    width: 96%;
    margin: 6rem auto;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 50%), 1fr));
  }
}
</style>
