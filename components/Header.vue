<script setup>
const navItems = [
  { route: '/', label: 'Home' },
  { route: '/agenda', label: 'Agenda' },
  { route: '/speakers', label: 'Speakers' },
  { route: '/sponsors', label: 'Sponsors' },
  { route: '/exhibitors', label: 'Exhibitors' },
  { route: '/mediacenter', label: 'Media Center' },
  { route: '/digitallibrary', label: 'Digital Library' },
  { route: '/contactus', label: 'Contact us' },
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
    class="relative  bg-[url('/assets/images/header-bg.jpg')] w-screen bg-cover bg-[center_75%] ">
  <div class="absolute w-full h-full bg-gradient-to-b from-neutral-950 to-transparent z-10 "></div>
  
    <div class="lg:mx-20 mx-auto  ">
      <div>
            <ul
              class="flex justify-center lg:justify-end items-center  lg:space-x-5 font-bold text-sm text-white py-3"
            >
              <li>
                <NuxtLink to="/register" class="relative flex items-center">
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
        <div class=" lg:hidden ">
          <HamburgerMenu/>
        </div>
      <div class="hidden lg:flex py-4 ">
        <div class="flex-col md:w-1/3 z-10">
          <div>
            <img
              src="/assets/images/new_logo.png"
              alt="Logo"
              class="h-16 my-5"
            />
          </div>
        </div>
        <div class="flex-1 z-10">
          <ul
            class="flex justify-between items-center space-x-2 font-bold text-sm text-white"
          >
            <li v-for="(item, index) in navItems" :key="index">
              <NuxtLink :to="item.route">
                <span>{{ item.label }}</span>
              </NuxtLink>
            </li>
            <li>
              <UButton
                variant="solid"
                class="button bg-sky-600 hover:bg-sky-600 px-8 rounded-none"
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
      <div class="z-10 text-white">
        <h1 class="text-xl md:text-3xl lg:text-4xl font-bold py-10 mx-16">Media Center</h1></div>
    </div>
  </div>

</template>
<style scoped>
.button {
  clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
}
</style>
