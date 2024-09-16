<script setup>
const links1 = [{
  label: 'Agenda',
  to: '/agenda'
}, {
  label: 'Speakers',
  to: '/speakers'
}, {
  label: 'Sponsors',
  to: '/sponsors'
},
{
  label: 'Add Poll',
  to: '/addpoll'
}]
const links2 = [{
  label: 'News',
  to: '/news'
}, {
  label: 'Gallery',
  to: '/gallery'
}, {
  label: 'Archieve',
  to: '/archeive'
}]
const links3 = [{
  label: 'Terms of Use',
  to: '/termsofuse'
},
{
  label: 'Privacy Policy',
  to: '/privacypolicy'
}]

const links4 = [{
    icon:'tdesign:logo-instagram',
    to:''
},
{
    icon:'iconoir:facebook',
    to:''
},
{
    icon:'i-simple-icons-x',
    to:''
}]

</script>
<template>
    <div class="bg-indigo-950 text-white h-96 flex flex-col">
      <div class="flex-grow">
        <div class="flex justify-around pt-20">
          <div>
            <img src="/assets/images/new_logo.png" alt="Logo">
          </div>
          <div>
            <ul>
              <li class="text-sm font-bold"><NuxtLink to="/">Home</NuxtLink></li>
            </ul>
          </div>
          <div class="space-y-3">
            <ul v-for="link in links1" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <ul v-for="link in links2" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <ul v-for="link in links3" :key="link.label">
              <li class="text-sm font-bold">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-row space-x-4">
            <ul v-for="link in links4" :key="link.icon">
              <li>
                <UButton :icon="link.icon" color="white" variant="white" :to="link.to" target="_blank" />
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
  