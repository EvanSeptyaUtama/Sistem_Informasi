<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->

  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <!----Burger Button--->
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="false"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <!---Logo Star Generation--->
          <a href="/halamanutamaabsen" class="flex ml-2 md:mr-24">
            <img
              src="/src/assets/logo_stargen.png"
              class="h-8 mr-3"
              alt="FlowBite Logo"
            />
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >ABSENSI STAR GENERATION</span
            >
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <!---Logo User Admin-->
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="true"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="" alt="user photo" />
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a
                    href="/admin"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Dashboard</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Settings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Earnings</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    >Sign out</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!------Sidebar----->
  <aside
    id="logo-sidebar"
    class="fixed top-0 rounded-xl left-0 z-40 w-64 h-screen text-xl pt-20 transition-transform -translate-x-full bg-gray-200 border-r border-gray-100 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <ul class="space-y-2 font-medium">
      <li>
        <a
          href="/halamanutamaabsen"
          class="flex items-center p-2 text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
          </svg>
          <span class="ml-3 font-semibold">Halaman Utama</span>
        </a>
      </li>
      <!-----Main Utama----->
      <!-- <li class="bg-indigo-100">
          <h2 class="ml-10 text-2xl font-bold leading-10">Main Utama</h2>
        </li>

        <li>
          <ul class="space-y-1">
            <li class="relative">
              <button
                class="flex items-center w-full px-2 py-2 text-1xl font-medium text-left text-gray-900 rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                @click="isOpenDM = !isOpenDM"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
                <span class="flex-1 ml-3">Data Master</span>
                <svg
                  class="w-5 h-5 mr-2 text-gray-900 group-hover:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    :class="{ hidden: isOpenDM, 'inline-flex': !isOpenDM }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                  <path
                    :class="{ hidden: !isOpenDM, 'inline-flex': isOpenDM }"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  ></path>
                </svg>
              </button>
              <ul
                v-show="isOpenDM"
                class="absolute inset-x-0 top-full px-2 py-1 mt-2 text-1xl font-medium text-gray-900 bg-white border border-gray-200 shadow-lg rounded-lg"
                @click="isOpenDM = false"
              >
                <li>
                  <a
                    href="/datakepalasekolah"
                    class="block px-3 py-2 hover:text-gray-800 hover:bg-gray-100"
                    >Kepala Sekolah</a
                  >
                </li>
                <li>
                  <a
                    href="/dataguru"
                    class="block px-3 py-2 hover:text-gray-800 hover:bg-gray-100"
                    >Guru</a
                  >
                </li>
                <li>
                  <a
                    href="/datasiswa"
                    class="block px-3 py-2 hover:text-gray-800 hover:bg-gray-100"
                    >Siswa</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <ul class="space-y-1">
          <li class="relative">
            <button
              class="flex items-center w-full px-2 py-2 text-1xl font-medium text-left text-gray-900 rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              @click="isOpenDU = !isOpenDU"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3">Data Umum</span>
              <svg
                class="w-5 h-5 mr-2 text-gray-900 group-hover:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  :class="{ hidden: isOpen, 'inline-flex': !isOpen }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
                <path
                  :class="{ hidden: !isOpen, 'inline-flex': isOpen }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            </button>
            <ul
              v-show="isOpenDU"
              class="absolute inset-x-0 top-full px-2 py-1 mt-2 text-1xl font-medium text-gray-900 bg-white border border-gray-200 shadow-lg rounded-lg"
              @click="isOpenDU = false"
            >
              <li>
                <a
                  href="/datakelas"
                  class="block px-3 py-2 hover:text-gray-800 hover:bg-gray-100"
                  >Kelas</a
                >
              </li>
              <li>
                <a
                  href="/datasemester"
                  class="block px-3 py-2 hover:text-gray-800 hover:bg-gray-100"
                  >Semester</a
                >
              </li>
              <li>
                <a
                  href="/datamatapelajaran"
                  class="block px-3 py-2 hover:text-gray-800 hover:bg-gray-100"
                  >Mata Pelajaran</a
                >
              </li>
            </ul>
          </li>
        </ul>

        <li>
          <a
            href="/jadwalmengajar"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
              ></path>
              <path
                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Jadwal Mengajar</span>
          </a>
        </li> -->
      <!-----Bagian Absen----->
      <li class="bg-gray-100">
        <h2 class="ml-10 text-2xl font-bold leading-10">Absen</h2>
      </li>
      <!---Rekap Absen---->
      <li>
        <a
          href="/inputabsen"
          class="flex items-center p-2 text-black font-semibold rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="flex-1 ml-3 whitespace-nowrap">Input Absen</span>
        </a>
      </li>
      <!----Data Absen--->
      <ul class="space-y-1">
        <li class="relative">
          <button
            class="flex items-center w-full px-2 py-2 text-1xl text-left text-black font-semibold rounded-md group hover:bg-gray-100"
            @click="isOpen = !isOpen"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3">Data Absen</span>
            <svg
              class="w-5 h-5 mr-2 text-gray-900 group-hover:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                :class="{ hidden: isOpen, 'inline-flex': !isOpen }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
              <path
                :class="{ hidden: !isOpen, 'inline-flex': isOpen }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </button>
          <ul
            v-show="isOpen"
            class="inset-x-0 top-full px-2 py-1 mt-2 text-1xl font-medium text-gray-900 bg-white border border-gray-200 shadow-lg rounded-lg"
            @click="isOpen = false"
          >
            <li>
              <a
                href="/absenguru"
                class="block px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200 hover:text-gray-800 hover:bg-gray-200"
                >Guru</a
              >
            </li>
            <li>
              <a
                href="/absensiswa"
                class="block px-3 py-2 hover:text-gray-800 hover:bg-gray-200"
                >Siswa</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <!---Rekap Absen---->
      <li>
        <a
          href="/rekapabsen"
          class="flex items-center p-2 text-black font-semibold rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="flex-1 ml-3 whitespace-nowrap">Rekap Absen</span>
        </a>
      </li>
    </ul>
  </aside>

  <div class="p-4 sm:ml-64 bg-gray-100">
    <router-view></router-view>
  </div>
  <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-1">
    <div class="w-full max-w-screen-lg mx-auto p-4 md:py-5">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/admin" class="flex items-center mb-4 sm:mb-0">
          <img
            src="/src/assets/logo_stargen.png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >STAR GENERATION</span
          >
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023
        <a href="/admin" class="hover:underline">STAR GENERATION</a></span
      >
    </div>
  </footer>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";

let isOpen = ref(false);
let isOpenDU = ref(false);
let isOpenDM = ref(false);

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>
