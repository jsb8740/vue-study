<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save"
    >
      <template #actions>
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
        <button class="btn btn-primary" @click="save">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createPosts } from "@/api/posts";
import PostForm from "@/components/posts/PostForm.vue";

const router = useRouter();
const goListPage = () => {
  router.push({ name: "PostList" });
};

const form = ref({
  title: "",
  content: "",
});

const save = async () => {
  try {
    const data = {
      ...form.value,
      createdAt: Date.now(),
    };
    await createPosts(data);

    goListPage();
  } catch (error) {
    throw error;
  }
};
</script>

<style scoped></style>
