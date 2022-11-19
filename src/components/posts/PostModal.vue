<template>
  <Transition>
    <AppModal v-model="show" title="게시글">
      <!-- <AppModal :show="show" title="게시글" @close="closeModal"> -->
      <template #default>
        <div class="row g-3">
          <div class="col-3">제목</div>
          <div class="col-9">{{ title }}</div>
          <div class="col-3">내용</div>
          <div class="col-9">{{ content }}</div>
          <div class="col-3">등록일</div>
          <div class="col-9">{{ createdAt }}</div>
        </div>
      </template>

      <template #actions>
        <button type="button" class="btn btn-secondary" @click="closeModal">
          닫기
        </button>
      </template>
    </AppModal>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const show = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const closeModal = () => {
  show.value = false;
};
</script>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
