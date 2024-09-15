<script setup>
const countries = ['United States', 'Canada', 'Mexico']

const country = ref(countries[0])
const navItems =[
  { route: '/', label: 'Home' },
  { route: '/agenda', label: 'Agenda' },
  { route: '/speakers', label: 'Speakers' },
  { route: '/sponsors', label: 'Sponsors' },
  { route: '/exhibitors', label: 'Exhibitors' },
  {route:'/mediacenter',label:'Media Center'},
  { route: '/digitallibrary', label: 'Digital Library' },
  { route: '/contactus', label: 'Contact us' },

]
</script>

<template>
    <div class="bg-[url('/assets/images/header-bg.jpg')] h-72 bg_image bg-cover">
    <div class="mx-20">
        <div>
            <ul class="flex justify-end items-center space-x-10  text-bold text-white">
            <li>
                <NuxtLink to="/register" class="relative flex items-center">
                <label class="mr-2">Register now</label>
                <UIcon name="heroicons:arrow-long-right" class="w-5 h-5" />
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/login" class="relative flex items-center">
                <label class="mr-2">Login</label>
                <UIcon name="material-symbols-light:lock-outline-sharp" class="w-5 h-5" />
                </NuxtLink>
            </li>
            <li>
                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">   
                 <UButton color="white" class="ring-0  text-bold text-base" label="English" trailing-icon="i-heroicons-chevron-down-20-solid" />
                </UDropdown>
            </li>
            </ul>
        </div>
        <div class=" flex my-5 h-full ">
            <div class=" flex-col justify-around  w-1/3">
        
        <div>
          <img src="/assets/images/Logo.jpg" alt="Logo"/>
        </div>
      </div>
            <div class="flex-1">
                <ul class="flex justify-between items-center space-x-2 text-bold text-white">
                    <li v-for="(item, index) in navItems" :key="index">
                        <NuxtLink :to="item.route">
                        <span >{{ item.label }}</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <UButton variant="solid" class="button bg-sky-600 px-8 rounded-none">
                            <UIcon name="material-symbols:auto-videocam-outline-sharp" class="w-5 h-5" />
                            <span class="text-bold">LIVE STREAMING</span>
                        </UButton>
                    </li>
                </ul>
        </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.bg_image{
    background-position: center 75%; 
}
.button{
  clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);

}
</style>
