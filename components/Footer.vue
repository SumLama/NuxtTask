<script setup>
const links = {
  main: [
    { label: 'Agenda', to: '/agenda' },
    { label: 'Speakers', to: '/speakers' },
    { label: 'Sponsors', to: '/sponsors' },
    { label: 'Add Poll', to: '/addpoll' }
  ],
  secondary: [
    { label: 'News', to: '/news' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Archive', to: '/archive' } 
  ],
  legal: [
    { label: 'Terms of Use', to: '/termsofuse' },
    { label: 'Privacy Policy', to: '/privacypolicy' }
  ],
  social: [
    { icon: 'tdesign:logo-instagram', to: '' },
    { icon: 'iconoir:facebook', to: '' },
    { icon: 'i-simple-icons-x', to: '' }
  ]
};
</script>
<template>

    <div class="bg-gradient-to-r from-[#00012D] to-[#03025f] text-white  md:h-96 flex flex-col">
    
      <div class="flex-grow">
        <div class="flex flex-col md:flex-row  md:justify-between md:mx-5 xl:justify-around  md:items-start justify-center items-center pt-20 space-y-5">
          <div>
            <img src="/assets/images/logo.png" alt="Logo">
          </div>
          <div>
            <ul>
              <li class="text-sm font-bold"><NuxtLink to="/">Home</NuxtLink></li>
            </ul>
          </div>
          <div class="space-y-2">
            <ul v-for="link in links.main" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <ul v-for="link in links.secondary" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <ul v-for="link in links.legal" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-row lg:space-x-4">
            <ul v-for="link in links.social" :key="link.icon">
              <li>
                <UButton :icon="link.icon" color="white" variant="white" :to="link.to" target="_blank" class="h-10 w-10" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer class=" text-center md:text-start mx-6 xl:mx-24" >
        <p>Copyright © Innovation Driven Water Sustainability 2024, All rights reserved.</p>
      </footer>

    </div>
 
  </template>
  