<template>
  <div>Home</div>
  <p>{{ route.name }}</p>
  <button class="btn btn-primary" @click="goHomePage">About으로 이동</button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const goHomePage = (): void => {
  router.push("/About");
};
</script>

<style scoped></style>
