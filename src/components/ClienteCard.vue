<script setup lang="ts">
import { ISomeClientsData } from '../types';

defineProps<{ clientsData: ISomeClientsData }>();
</script>

<template>
  <picture>
    <img :src="clientsData.img" :alt="clientsData.name" :title="clientsData.name" />
  </picture>
</template>

<style scoped></style>
