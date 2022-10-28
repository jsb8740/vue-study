<template>
  <div>About</div>
  <button class="btn btn-primary" @click="goAboutPage">Home으로 이동</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const goAboutPage = (): void => {
  router.push("/");
};
</script>

<style scoped></style>
