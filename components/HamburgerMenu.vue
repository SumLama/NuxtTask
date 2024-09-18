<script setup>
import { ref } from "vue";

const navItems = [
  { route: "/", label: "Home" },
  { route: "/agenda", label: "Agenda" },
  { route: "/speakers", label: "Speakers" },
  { route: "/sponsors", label: "Sponsors" },
  { route: "/exhibitors", label: "Exhibitors" },
  { route: "/mediacenter", label: "Media Center" },
  { route: "/digitallibrary", label: "Digital Library" },
  { route: "/contactus", label: "Contact us" },
];

const toggle = ref(false);
const iconName = computed(() => {
  return toggle.value === false ? "ic:baseline-menu" : "ic:outline-close";
});
const toggleMenu = () => {
  toggle.value = !toggle.value;
};
</script>

<template>
  <div>
    <div class=" relative z-10 flex justify-between items-center p-4">
      <div>
        <img src="/assets/images/new_logo.png" alt="logo" />
      </div>
      <div>
        <button
          @click="toggleMenu"
          type="button"
          class="inline-flex items-center justify-center p-4 z-10 "
        >
          <UIcon :name="iconName" class="h-8 w-8 bg-white" />
        </button>
      </div>
    </div>

    <div
      v-if="toggle"
      class="flex flex-col font-bold text-base xl:text-sm items-start px-20 py-5"
    >
      <ul class="space-y-2 z-10 ">
        <li v-for="item in navItems" :key="item.route">
          <NuxtLink :to="item.route" class="text-white">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
      <UButton
        variant="solid"
        class="button bg-sky-600 hover:bg-sky-700 rounded-none w-36 mt-4"
      >
        <UIcon
          name="material-symbols:auto-videocam-outline-sharp"
          class="w-5 h-5"
        />
        <span class="text-xs font-bold">LIVE STREAMING</span>
      </UButton>
    </div>
  </div>
</template>

<style scoped>
.button {
  clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
}
</style>
