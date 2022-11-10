<template>
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <input
          :value="title"
          @input="updateTitle"
          type="text"
          class="form-control"
        />
      </div>

      <div class="col-3">
        <select :value="limit" @input="updateLimit" class="form-select">
          <option :value="3">3개씩 보기</option>
          <option :value="6">6개씩 보기</option>
          <option :value="9">9개씩 보기</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  limit: {
    type: Number,
  },
});

const emit = defineEmits(["update:title", "update:limit"]);

const updateTitle = (event: Event) => {
  emit("update:title", (event.target as HTMLInputElement).value);
};

const updateLimit = (event: Event) => {
  emit("update:limit", (event.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
