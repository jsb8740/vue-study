<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">
      {{ content }}
    </p>
    <p class="text-muted">{{ createdAt }}</p>
    <template #footer>
      <div class="d-flex flex-row-reverse">
        <button class="btn p-0" @click.stop="modalOpen">
          <img src="@/assets/images/modal.svg" />
        </button>
      </div>
    </template>
  </AppCard>
</template>

<script setup lang="ts">
console.log();

defineProps<{
  title: string;
  content: string;
  createdAt: string | Date | number;
}>();

const emit = defineEmits(["modal"]);
const modalOpen = () => {
  emit("modal");
};
</script>

<style scoped></style>
