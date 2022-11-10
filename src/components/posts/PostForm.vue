<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label"> 제목 </label>
      <input
        :value="title"
        @input="updateTitle"
        type="text"
        class="form-control"
        id="title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label"> 내용 </label>
      <textarea
        :value="content"
        @input="updateContent"
        class="form-control"
        id="content"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex gap-2 ml-4">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();

// const emit = defineEmits<{
//   (event: "update", title: string): void;
//   (event: "update", content: string): void;
// }>();
const emit = defineEmits(["update:title", "update:content"]);

const updateTitle = (e: Event) => {
  emit("update:title", (e.target as HTMLInputElement).value);
};
const updateContent = (e: Event) => {
  emit("update:content", (e.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
