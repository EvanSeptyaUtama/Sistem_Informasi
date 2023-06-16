<template>
  <div>
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <!-----logo instansi---->
        <div class="flex lg:flex-1 flex-shrink-0">
          <a href="/dashboard" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-10 w-auto"
              src="/src/assets/logo_stargen.png"
              alt=""
            />
          </a>
          <a href="/dashboard"
            ><span class="py-14 px-2 font-bold text-2xl">STAR GENERATION</span>
          </a>
        </div>
        <!---Burger Button---->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <a href="/" class="text-lg font-bold leading-10"> Halaman Utama</a>
          <Popover class="relative">
            <PopoverButton
              class="flex items-center gap-x-1 text-lg font-bold focus:outline-none leading-10"
            >
              Beranda
              <ChevronDownIcon class="h-5 w-5 flex-none" aria-hidden="true" />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
              >
                <div class="p-4">
                  <div
                    v-for="item in beranda"
                    :key="item.name"
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                  >
                    <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="flex-auto">
                      <a
                        :href="item.href"
                        class="block font-semibold text-gray-900"
                      >
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="/informasiakademik" class="text-lg font-bold leading-10"
            >Informasi Akademik</a
          >
        </PopoverGroup>
        <!----Navbar Login & PSB---->
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/absensi" class="text-lg font-bold leading-10">Login </a>
          <span> &nbsp; &nbsp; &nbsp;</span>
          <a
            href="/pendaftaranmahasiswabaru"
            class="text-lg font-bold leading-10 text-grey"
            >PDDB <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
      <!-------Versi Mobile--------->
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <img class="h-8 w-auto" src="../assets/logo_stargen.png" alt="" />
              <span class="sr-only">Your Company</span>
              <span class="font-semibold">STAR GENERATION</span>
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-10 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <!----Mobile: Beranda -> Hub kami dan Tentang kami---->
              <div class="space-y-2 py-6">
                <a
                  href="/dashboard"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Halaman Utama</a
                >
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Beranda
                    <ChevronDownIcon
                      :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton
                      v-for="item in [...beranda]"
                      :key="item.name"
                      as="a"
                      :href="item.href"
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >{{ item.name }}</DisclosureButton
                    >
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Informasi Akademik</a
                >
              </div>

              <!---Mobile : Login , PPDB--->
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Login</a
                >
                <a
                  href="/DashboardPSB"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >PPDB</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-1">
      <div class="w-full max-w-screen-lg mx-auto p-2 md:py-5">
        <!---Logo Stargen bagian footer--->
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="/dashboard" class="flex items-center mb-4 sm:mb-0">
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
              <a href="#" class="mr-4 hover:underline md:mr-6"
                >Privacy Policy</a
              >
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
          <a href="/dashboard" class="hover:underline">STAR GENERATION</a></span
        >
      </div>
    </footer>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/vue/20/solid";

const beranda = [
  {
    name: "Hubungi Kami",
    description: "Kontak SD Star Generation",
    href: "#",
    icon: PhoneIcon,
  },
  {
    name: "Tentang Kami",
    description:
      "Berisi tentang visi, misi, dan identitas lain terkait SD Star Generation",
    href: "/tentangkami",
    icon: UserGroupIcon,
  },
];

const mobileMenuOpen = ref(false);
</script>
