<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>

      <div class="col-auto me-auto"></div>

      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { deletePosts, getPostById } from "@/api/posts";
import { ref, type Ref } from "vue";
import type { postsInfo } from "@/api/posts";

const router = useRouter();
const route = useRoute();
// console.log(route.params);

const props = defineProps<{
  id: number;
}>();

// console.log(typeof numberId);

const remove = async () => {
  try {
    if (confirm("삭제 하시겠습니까?") === false) {
      return;
    }
    await deletePosts(props.id);
    goListPage();
  } catch (error) {
    throw error;
  }
};

const post: Ref<postsInfo> = ref({});
const fetchPost = async () => {
  const { data } = await getPostById(props.id);
  setPost(data);
};
const setPost = ({ title, content, createdAt }: postsInfo) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createdAt = createdAt;
};
fetchPost();
// console.log(form.value);
// console.log(getPostById(numberId));

const goListPage = (): void => {
  router.push({
    name: "PostList",
  });
};
const goEditPage = (): void => {
  router.push({
    name: "PostEdit",
    params: { id: props.id },
  });
};
</script>

<style scoped></style>
