<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="prevPage"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pageCount"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="clickCurrentPage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="isNextPage">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="nextPage"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps<{
  currentPage: number;
  pageCount: number;
}>();

const emit = defineEmits(["page"]);
const clickCurrentPage = (page: number) => {
  emit("page", page);
};
const prevPage = () => {
  emit("page", props.currentPage - 1);
};
const nextPage = () => {
  emit("page", props.currentPage + 1);
};

const isPrevPage = computed(() => ({ disabled: props.currentPage < 1 }));
const isNextPage = computed(() => ({
  disabled: props.currentPage === props.pageCount,
}));
</script>

<style scoped></style>
