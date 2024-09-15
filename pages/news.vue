<script setup>
const news = {
  "id": 3,
  "title": "THE WATER FUTURE",
  "createdAt": "2024-09-13T04:24:25.000Z",
  "readTime": 5,
  "content": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>",
  "image": "https://pub-f9a129ce37b8446bafc8a9b4ca2c4bdb.r2.dev/prod/media-center/news/e26b3ada-9154-49ce-9fb4-e9302f6b89bf.png"
};
</script>

<template>
  <Header />
  <div class="">
    <div class="mx-auto w-4/6">
      <h1 class="text-2xl font-bold my-3">Featured News</h1>
      <div class="flex space-x-10">
        <ul v-for="i in 2" :key="i" class="space-y-3">
            <li>
                <img :src="news.image" :alt="news.title" class="" />
            </li>
            <li class=" flex space-x-4 text-xs">
                <span class="text-xs">{{ news.createdAt }}</span>
                <span class="flex items-center space-x-2 text-xs">
                    <UIcon name="heroicons-outline:clock" class="w-4 h-4" />
                    <span>{{ news.readTime }} Min Read</span>
                </span>
          </li>
            <li class="text-bold text-xl">{{ news.title }}</li>
        </ul>
      </div>
    </div>
    <div class="mx-auto w-4/6">
    <h1 class="text-2xl font-bold my-6">Recent News</h1>
    <div class="grid grid-cols-3 gap-6"> 
      <ul v-for="i in 6" :key="i" class="flex flex-col space-y-3">
        <li>
          <img :src="news.image" :alt="news.title" class="h-64  object-cover" />
        </li>
        <li class=" flex space-x-4 text-xs">
            <span class="text-xs">{{ news.createdAt }}</span>
          <span class="flex items-center space-x-2 text-xs">
            <UIcon name="heroicons-outline:clock" class="w-4 h-4" />
            <span>{{ news.readTime }} Min Read</span>
          </span>
          </li>
        <li class="text-bold text-xl">{{ news.title }}</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>
