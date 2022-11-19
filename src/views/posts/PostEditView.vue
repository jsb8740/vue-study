<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button class="btn btn-outline-danger" @click="goDetailPage">
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>

    <!-- <AppAlert :show="showAlert" :message="alertMsg" :type="alertType" /> -->
    <AppAlert :items="alerts" />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { getPostById, updatePosts, type postsInfo } from "@/api/posts";
import { ref, type Ref } from "vue";
import PostForm from "@/components/posts/PostForm.vue";

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

const form = ref({
  title: "",
  content: "",
  createdAt: "",
});
const fetchPost = async () => {
  const { data } = await getPostById(id as string);
  setPost(data);
};
const setPost = ({ title, content, createdAt }: postsInfo) => {
  form.value.title = title as string;
  form.value.content = content as string;
  form.value.createdAt = createdAt as string;
};
fetchPost();

const edit = async () => {
  try {
    await updatePosts(id as string, { ...form.value });
    // goDetailPage();
    vAlert("수정이 완료되었습니다.", "success");
  } catch (error: any) {
    vAlert(error.message);
    throw error;
  }
};

//alert
// const showAlert = ref(false);
// const alertMsg = ref("");
// const alertType = ref("");

interface alertProps {
  message: string;
  type: string;
}
const alerts: Ref<alertProps[]> = ref([]);

const vAlert = (msg: string, type: string = "error") => {
  alerts.value.push({ message: msg, type });
  // showAlert.value = true;
  // alertMsg.value = msg;
  // alertType.value = type;

  setTimeout(() => {
    // showAlert.value = false;
    alerts.value.shift();
  }, 2000);
};
</script>

<style scoped></style>
