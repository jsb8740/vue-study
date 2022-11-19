<template>
  <div>Home</div>
  <p>{{ route.name }}</p>
  <button class="btn btn-primary" @click="goHomePage">About으로 이동</button>

  <hr class="my-4" />

  <button @click="person.say">dfdf</button>

  <AppGrid :items="items" #="{ item }">
    <AppCard>
      {{ item }}
    </AppCard>
  </AppGrid>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const goHomePage = (): void => {
  router.push("/About");
};

const items = ref(["사과", "딸기", "포도", "바나나"]);

const person: any = inject("person");
</script>

<style scoped></style>
