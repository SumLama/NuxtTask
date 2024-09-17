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
    { label: 'Archive', to: '/archive' } // Corrected "Archieve" to "Archive"
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
    <div class="bg-blue-950 text-white  lg:h-96 flex flex-col">
      <div class="flex-grow">
        <div class="flex flex-col lg:flex-row lg:justify-around  lg:items-start justify-center items-center space-y-4 pt-20">
          <div>
            <img src="/assets/images/new_logo.png" alt="Logo">
          </div>
          <div>
            <ul>
              <li class="text-sm font-bold"><NuxtLink to="/">Home</NuxtLink></li>
            </ul>
          </div>
          <div class="space-y-3">
            <ul v-for="link in links.main" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <ul v-for="link in links.secondary" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
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
      <footer class="m-10 ml-20" >
        <p>Copyright © Innovation Driven Water Sustainability 2024, All rights reserved.</p>
      </footer>
    </div>
  </template>
  