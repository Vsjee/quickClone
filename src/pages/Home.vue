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
</template>

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
</style>
