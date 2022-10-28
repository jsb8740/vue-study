<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title!"
          :content="post.content!"
          :created-at="post.createdAt!"
          @click="goPage(post.id)"
        />
      </div>
    </div>
    <hr class="my-4" />

    <AppCard>
      <PostDetailView :id="1"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import { ref, type Ref } from "vue";
import { getPosts } from "@/api/posts";
import type { postsInfo } from "@/api/posts";
import { useRouter } from "vue-router";
import AppCard from "@/components/AppCard.vue";

const posts: Ref<Array<postsInfo>> = ref([]);

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();

const router = useRouter();
const goPage = (postId: number | undefined): void => {
  router.push({
    name: "PostDetail",
    params: {
      id: postId,
    },
  });
};
</script>

<style scoped></style>
