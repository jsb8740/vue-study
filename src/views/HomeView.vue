<template>
  <div>Home</div>
  <p>{{ route.name }}</p>
  <button class="btn btn-primary" @click="goHomePage">About으로 이동</button>

  <hr class="my-4" />

  <AppGrid :items="items" #="{ item }">
    <AppCard>
      {{ item }}
    </AppCard>
  </AppGrid>
</template>

<script setup lang="ts">
import AppCard from "@/components/AppCard.vue";
import AppGrid from "@/components/AppGrid.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const goHomePage = (): void => {
  router.push("/About");
};

const items = ref(["사과", "딸기", "포도", "바나나"]);
</script>

<style scoped></style>
