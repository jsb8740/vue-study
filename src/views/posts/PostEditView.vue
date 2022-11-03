<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="title" class="form-label"> 제목 </label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="title"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label"> 내용 </label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
      </div>

      <div class="pl-4">
        <button class="btn btn-outline-danger me-2" @click="goDetailPage">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { getPostById, updatePosts, type postsInfo } from "@/api/posts";
import { ref, type Ref } from "vue";

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const goDetailPage = () => {
  router.push({ name: "PostDetail", params: { id } });
};

const goListPage = () => {
  router.push({
    name: "PostList",
  });
};

const form: Ref<postsInfo> = ref({
  title: "",
  content: "",
});
const fetchPost = async () => {
  const { data } = await getPostById(id as string);
  setPost(data);
};
const setPost = ({ title, content, createdAt }: postsInfo) => {
  form.value.title = title;
  form.value.content = content;
  form.value.createdAt = createdAt;
};
fetchPost();

const edit = async () => {
  try {
    await updatePosts(id as string, { ...form.value });
    goDetailPage();
  } catch (error) {
    throw error;
  }
};
</script>

<style scoped></style>
