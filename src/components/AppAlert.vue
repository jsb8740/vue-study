<template>
  <!-- <Transition>
    <div v-if="show" class="app-alert alert" :class="typeStyle" role="alert">
      {{ message }}
    </div>
  </Transition> -->

  <div class="app-alert">
    <TransitionGroup>
      <div
        v-for="({ message, type }, index) in items"
        :key="index"
        class="alert"
        :class="typeStyle(type)"
        role="alert"
      >
        {{ message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
interface alertProps {
  message: string;
  type: string;
}

defineProps<{
  items: alertProps[];
}>();

const typeStyle = (type: string) =>
  type === "error" ? "alert-danger" : "alert-primary";

// const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     default: "error",
//     validator: (value: string) => ["error", "success"].includes(value),
//   },
// });

// const typeStyle = computed(() =>
//   props.type === "error" ? "alert-danger" : "alert-primary"
// );
</script>

<style scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
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
