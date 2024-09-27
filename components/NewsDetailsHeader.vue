<script setup lang="ts">
const navItems = [
  { route: '/', label: 'Home' },
  { route: '/agenda', label: 'Agenda' },
  { route: '/speakers', label: 'Speakers' },
  { route: '/sponsors', label: 'Sponsors' },
  { route: '/exhibitors', label: 'Exhibitors' },
  { route: '/media-center', label: 'Media Center' },
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

<template #header>
  <div class="w-full h-full bg-gradient-to-r from-[#00012D] to-[#03025f]">
    <div class="xl:mx-20 mx-auto">
      <div>
          <ul
            class="flex justify-center lg:justify-end items-center lg:space-x-5 font-bold text-sm text-white py-3 cursor-pointer "
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
                  :items="items"
                  :popper="{ placement: 'bottom-start' }"
                >
                  <UButton
                    label="Options"
                    trailing-icon="i-heroicons-chevron-down-20-solid"
                    class="font-bold ring-0 text-sm bg-transparent hover:ring-0 hover:bg-transparent"
                  />
                </UDropdown>
              </li>
            </ul>
          </div>
        <div class=" xl:hidden">
          <HamburgerMenu/>
        </div>
      <div class="hidden xl:flex pb-10 ">
        <div class=" lg:w-1/3 z-10 ">
       
            <img
              src="/assets/images/logo.png"
              alt="Logo"
            
            />
        
        </div>
        <div class="flex-1">
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
                  class="w-5 h-5"
                />
                <span class="text-sm font-bold">LIVE STREAMING</span>
              </UButton>
            </li>
          </ul>
        </div>
      </div>
      </div>
      </div>
</template>
<style scoped>
.button {
  clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
}
</style>
