<script setup>
const route = useRoute();
const apiUrl = `https://swa-2024-dev.up.railway.app/api/media-center/news/${route.params.id}`;
const { data: item, status } = await useFetch(apiUrl);

</script>

<template>
  <div>
    <div v-if="status === 'pending'">
      <p>Loading......</p>
    </div>
   
    <div v-else-if="status === 'success'">
      <div class="w-4/6 mx-auto py-16 xl:py-32 space-y-5">
        
          <div>
            <p class="text-medium text-3xl">{{ item.title }}</p>
          </div>
          <div class="mt-1 mb-14">
            <span>{{ item.createdAt }}</span
            ><br />
            <span>{{ item.readTime }} min read</span>
          </div>
          <div class="my-5">
            <img :src="item.image" :alt="item.title" class="h-[55%] w-[55%]" />
          </div>
          <div>
            <p class="leading-loose">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
 
</template>
