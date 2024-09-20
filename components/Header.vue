<script setup>
const navItems = [
  { route: '/', label: 'Home' },
  { route: '/agenda', label: 'Agenda' },
  { route: '/speakers', label: 'Speakers' },
  { route: '/sponsors', label: 'Sponsors' },
  { route: '/exhibitors', label: 'Exhibitors' },
  { route: '/news', label: 'Media Center' },
  { route: '/digital-library', label: 'Digital Library' },
  { route: '/contact-us', label: 'Contact us' },
];
const items = [
    [{
      label: 'English',
    },
    {
      label: 'Arabian',
    },
    {
      label: 'English',
    }]
];
</script>

<template>
  <div
    class="relative  bg-[url('/assets/images/header-bg.jpg')] bg-cover bg-[center_75%] ">
  <div class="absolute w-full h-full bg-gradient-to-b from-black via-black/75 to-transparent z-0 "></div> 
   
  
    <div class="xl:mx-20 mx-auto">
      <div>
            <ul
              class="flex justify-center md:justify-end items-center space-x-3 lg:space-x-5 font-bold text-sm text-white py-3 cursor-pointer "
            >
              <li>
                <NuxtLink to="/register" class="relative flex items-center" exact-active-class="bg-">
                  <label class="mr-2">Register now</label>
                  <UIcon name="heroicons:arrow-long-right" class="w-5 h-5" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/login" class="relative flex items-center">
                  <label class="mr-2">Login</label>
                  <UIcon
                    name="material-symbols-light:lock-outline-sharp"
                    class="w-5 h-5"
                  />
                </NuxtLink>
              </li>
              <li>
                <UDropdown
                  v-model:open="open"
                  :items="items"
                  :popper="{ placement: 'bottom-start' }"
                >
                  <UButton
                    color=""
                    label="Options"
                    trailing-icon="i-heroicons-chevron-down-20-solid"
                    class="font-bold ring-0 text-sm bg-transparent hover:ring-0"
                  />
                </UDropdown>
              </li>
            </ul>
          </div>
        <div class=" xl:hidden  ">
          <HamburgerMenu/>
        </div>
      <div class="hidden xl:flex py-6 ">
        <div class="flex-col lg:w-1/3 z-10">
          <div>
            <img src="/assets/images/logo.png" alt="Logo"
             
            />
          </div>
        </div>
        <div class="flex-1 z-10">
          <ul
            class="flex justify-between items-center space-x-2 font-bold text-sm text-white my-5"
          >
            <li v-for="(item, index) in navItems" :key="index" >
              <NuxtLink :to="item.route" exact-active-class="text-[#0058A0]">
                <span>{{ item.label }}</span>
              </NuxtLink>
            </li>
            <li>
              <UButton
                variant="solid"
                class="button bg-[#0058A0] hover:bg-[#0058A0] px-8 rounded-none"
              >
                <UIcon
                  name="material-symbols:auto-videocam-outline-sharp"
                  class="w-5 h-5 bg-red"
                />
                <span class="text-sm font-bold">LIVE STREAMING</span>
              </UButton>
            </li>
          </ul>
        </div>
      </div>
      <div class="relative z-10">
        <h1 class="text-xl md:text-3xl lg:text-4xl font-bold py-10 mx-16 text-white z-10">Media Center</h1></div>
    </div>
  </div>

</template>
<style scoped>
.button {
  clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
}
</style>
