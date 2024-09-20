<script setup>
const {data:news,status} = await getNews().newsList();
</script>
<template>
  <div>
    <div v-if="status === 'pending'"><p>Loading data........</p></div>
    <div v-else-if="status === 'error'"><p>Fetching error</p></div>
    <div v-else-if="status === 'success'" >
      <div class="lg:w-4/6 mx-auto px-8 md:px-16 lg:px-0">
        <h1 class="text-3xl font-bold my-3">Featured News</h1>
     
          <UCarousel
            fix
            :items="news.results"
            :ui="{
          item: 'basis-full md:basis-1/2',
              container: 'rounded-none gap-4 h-full  ',
              arrows: {
                wrapper: 'flex items-center justify-end my-2 ',
                prev: 'mr-2',
                next: 'ml-2 ',
              }
            }"
            arrows
            >
            <template #default="{ item }">
              <div class="flex flex-col w-full px-2">
                <NuxtLink :to="`/news/${item.id}`">
        
                  <img
                    :src="joinUrls(item.image)"
                    :alt="item.title"
                    class="w-full h-[260px]  md:h-[220px] xl:h-[325px] object-cover snap-start "
                    draggable="false"
                  />
           
                </NuxtLink>
                <div class="mt-4">
                  <div class="flex text-xs space-x-3">
                    <span>{{ item.createdAt }}</span>
                    <span class="flex space-x-2">
                      <UIcon name="heroicons-outline:clock" class="w-4 h-4" />
                      <span>{{ item.readTime }} Min Read</span>
                    </span>
                  </div>
                  <div class="font-medium text-xl mt-2">{{ item.title }}</div>
                </div>
              </div>
            </template>

            <template #prev="{ onClick, disabled,size }">
              <button
                :disabled="disabled"
                @click="onClick"
                size="xl"
                class="h-5 w-5 bg-gray-200 mx-2"

              >
                <UIcon name="heroicons:chevron-left" class="h-5 w-5 size:lg bg-violet-800" />
              </button>
            </template>

            <template #next="{ onClick, disabled, page, pages }">
        
              <button
                :disabled="disabled",
              
                @click="onClick"
                class="h-5 w-5 bg-gray-200"
              >
                <UIcon 
                  name="heroicons:chevron-right" 
                  class="h-5 w-5" 
                  :class="{'bg-green-500':  !disabled,
                    'bg-indigo-800': disabled || page >= pages
                  }" 
                />
               
              </button>
            </template>
          </UCarousel>
     
      <div>
        <h1 class="text-3xl font-bold my-5">Recent News</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-8">
          <ul
            v-for="item in news.results"
            :key="item.id"
            class="flex flex-col space-y-3"
          >
            <li>
              <img
                :src="joinUrls(item.image)"
                :alt="item.title"
                class="w-full md:h-56 lg:h-48 object-cover"
              />
            </li>
            <li class="flex space-x-4 text-xs">
              <span class="text-xs">{{ item.createdAt }}</span>
              <span class="flex items-center space-x-2 text-xs">
                <UIcon name="heroicons-outline:clock" class="w-4 h-4" />
                <span>{{ item.readTime }} Min Read</span>
              </span>
            </li>
            <li class="font-medium text-xl">{{ item.title }}</li>
          </ul>
        </div>
      </div> 
    </div>
    </div>
  </div>
</template>
