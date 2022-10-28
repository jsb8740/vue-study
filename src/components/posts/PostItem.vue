<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ content }}
    </p>
    <p class="text-muted">{{ createdAt }}</p>
  </AppCard>
</template>

<script setup lang="ts">
import AppCard from "../AppCard.vue";

console.log();

defineProps<{
  title: string;
  content: string;
  createdAt: string | Date | number;
}>();
</script>

<style scoped></style>
