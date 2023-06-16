<template>
  <div>
    <div class="px-4 sm:px-6 md:px-0">
      <!-- Replace with your content -->
      <div class="py-0">
        <div
          class="mt-10 p-10 h-32 border-2 dark:border-gray-700 bg-white rounded-lg"
        >
          <div>
            <span class="text-3xl">Admin 3</span>
          </div>
          <div>
            <span class="text-lg">Selamat datang di halaman absen!</span>
          </div>
        </div>
        <div
          class="grid md:flex p-4 border-2 bg-white border-gray-200 rounded-lg dark:border-gray-700 mt-10"
        >
          <div
            class="float-left grid-cols-1 lg:grid-cols-3 max-w-4xl justify-items-center"
          >
            <img class="p-2" src="/src/assets/logo_stargen.png" />
          </div>
          <div class="p-10">
            <div>
              <h2 class="float-left max-w-4xl text-4xl font-bold">
                STAR GENERATION
              </h2>
            </div>
            <div>
              <span class="float-left mt-3 text-3xl font-semibold">
                Jl. APT Pranoto No.RT.35 NO.99A, Sangatta Utara, Kec. Sangatta
                Utara, Kabupaten Kutai Timur, Kalimantan Timur 75683
              </span>
            </div>
          </div>
        </div>
        <div
          class="grid justify-center gap-x-8 gap-y-4 p-5 grid-cols-1 lg:grid-cols-2 bg-white mt-10 rounded-lg border-2 dark:border-gray-700"
        >
          <button
            v-for="boxd in boxData"
            :key="boxd.name"
            class="grid gap-x-8 gap-y-2 p-5 justify-items-center box-content border-4 bg-gray-100 hover:bg-slate-200 hover:border-gray-200 border-gray-300 rounded-lg dark:border-gray-700 text-center text-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-10 h-10"
            >
              <path
                fill-rule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                clip-rule="evenodd"
              />
              <path
                d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"
              />
            </svg>

            <span>{{ boxd.judul }}</span>
            <span>{{ boxd.jumlah }}</span>
          </button>
        </div>
      </div>
      <!-- /End replace -->
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

import { HomeIcon } from "@heroicons/vue/24/solid";

const navigation = [
  { name: "Halaman Utama", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: HomeIcon, current: false },
  { name: "Projects", href: "#", icon: HomeIcon, current: false },
  { name: "Calendar", href: "#", icon: HomeIcon, current: false },
  { name: "Documents", href: "#", icon: HomeIcon, current: false },
  { name: "Reports", href: "#", icon: HomeIcon, current: false },
];
import "vue3-carousel/dist/carousel.css";
const sidebarOpen = ref(false);
const boxData = [
  {
    judul: "Data Siswa ",
    jumlah: 200,
  },
  {
    judul: "Data Guru",
    jumlah: 20,
  },
];
</script>
