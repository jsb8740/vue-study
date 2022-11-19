<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <PostFilter
      v-model:title="params.title_like"
      v-model:limit="params._limit"
    />
    <hr class="my-4" />
    <AppGrid :items="posts">
      <template v-slot="{ item }">
        <PostItem
          :title="item.title!"
          :content="item.content!"
          :created-at="item.createdAt!"
          @click="goPage(item.id)"
          @modal="openModal(item)"
        ></PostItem>
      </template>
    </AppGrid>
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4"></div>
    </div>

    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="(page: number) => (params._page = page)"
    />

    <!-- 이 부분 v-model로 props 계속전달하는방식 다시 확인 -->
    <!-- 자식컴포넌트에서 변경을 방지하기 위해서 computed를 사용했음 -->
    <Teleport to="#modal">
      <PostModal
        v-model="show"
        :title="modalTitle"
        :content="modalContent"
        :created-at="modalCreatedAt"
      />
    </Teleport>

    <template v-if="posts && posts.length > 0">
      <hr class="my-5" />
      <AppCard>
        <PostDetailView :id="posts[0].id!"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup lang="ts">
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import { ref, watch, type Ref } from "vue";
import { getPosts } from "@/api/posts";
import type { postsInfo } from "@/api/posts";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import PostFilter from "@/components/posts/PostFilter.vue";
import PostModal from "@/components/posts/PostModal.vue";

const posts: Ref<Array<postsInfo>> = ref([]);

const params = ref({
  _sort: "createdAt",
  _order: "desc",
  _limit: 3,
  _page: 1,
  title_like: "",
});

//pagination
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit)
);

const fetchPosts = async () => {
  const { data, headers } = await getPosts(params.value);
  posts.value = data;
  totalCount.value = parseInt(headers["x-total-count"] as string);

  // ({ data: posts.value } = await getPosts(params.value));

  // console.dir(data);
};
watch(params.value, fetchPosts, { immediate: true });
// fetchPosts();

const router = useRouter();
const goPage = (postId: string | undefined | number): void => {
  router.push({
    name: "PostDetail",
    params: {
      id: postId,
    },
  });
};

// modal
const show = ref(false);
const modalTitle = ref("");
const modalContent = ref("");
const modalCreatedAt = ref("");
const openModal = ({ title, content, createdAt }: postsInfo) => {
  show.value = true;
  modalTitle.value = title!;
  modalContent.value = content!;
  modalCreatedAt.value = createdAt as string;
};
const closeModal = () => {
  show.value = false;
};
</script>

<style scoped></style>
