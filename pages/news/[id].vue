<script setup lang="ts">
import { format } from 'date-fns';

definePageMeta({
  layout: false,
});
interface NewsDetail {
  id: number;
  title: string;
  createdAt: string;
  readTime: number;
  content: string;
  image: string;
}

const route = useRoute();
const { data: item, status } = await useFetch<NewsDetail>(
  `https://swa-2024-dev.up.railway.app/api/media-center/news/${route.params.id}`
);

</script>
<template>
  <div>
    <NuxtLayout name="custom">
      <template #header>
        <NewsDetailsHeader />
      </template>
      <div v-if="status === 'pending'">
        <p>Loading......</p>
      </div>

      <div v-else-if="status === 'success' && item">
        <div class="w-4/6 mx-auto py-16 xl:py-32 space-y-5">
          <div>
            <p class="text-medium text-3xl">{{ item.title }}</p> <!-- Access 'details' -->
          </div>
          <div class="mt-1 mb-14">
            <span>{{ format(new Date(item.createdAt), 'dd MMM yyyy, hh.mm aa') }}</span>
            <br />
            <span>{{ item.readTime }} min read</span>
          </div>
          <div class="my-5 w-full lg:w-[450px]">
            <img :src="getImageUrl(item.image)" :alt="item.title" class="w-full" />
          </div>
          <div v-html="item.content"></div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>