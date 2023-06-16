<template>
  <div>
    <!----Carousel---->
    <div class="w-full h-44 lg:h-screen">
      <img
        src="/src/assets/Halamanutama_Stargen.png"
        class="object-cover w-full h-full"
        alt=""
      />
    </div>
    <!------Kegiatan Sekolah------>
    <div class="bg-white py-10 sm:py-10">
      <div>
        <h1 class="text-center text-4xl font-bold">Kegiatan Sekolah</h1>

        <div class="">
          <!---Carousel Mobile--->
          <div class="lg:hidden mx-auto">
            <carousel :items-to-show="1">
              <slide v-for="item in items" :key="item.name">
                <div class="bg-indigo-200 mx-3 rounded-lg px-6 py-6">
                  <span class="text-lg font-bold">{{ item.judul }}</span>
                  <div class="mx-auto">
                    <img class="px-2" :src="item.imageUrl" />
                  </div>

                  <div>
                    <p class="text-justify">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </slide>

              <template>
                <Navigation />
                <Pagination />
              </template>
            </carousel>
          </div>
          <!---Carousel web--->
          <div class="hidden lg:block">
            <carousel :items-to-show="3">
              <slide v-for="item in items" :key="item.name">
                <div class="bg-indigo-200 mx-3 rounded-lg px-6 py-6">
                  <span class="text-xl font-bold leading-10">{{
                    item.judul
                  }}</span>
                  <div>
                    <img class="mx-auto w-96 rounded-lg" :src="item.imageUrl" />
                  </div>

                  <div>
                    <p class="text-justify">
                      {{ item.description }}
                    </p>
                  </div>
                  <div>
                    <button
                      class="bg-indigo-700 rounded-lg hover:bg-indigo-900 duration-200 text-white px-4 py-2 mt-5"
                      type="button"
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </slide>

              <template #addons>
                <Navigation />
              </template>
            </carousel>
          </div>
        </div>
      </div>
    </div>
    <!------Visi dan Misi Sekolah------>
    <div class="bg-gray-200 py-24 sm:py-32">
      <div v-for="vm in visimisi" :key="vm.name">
        <span class="flex justify-center text-4xl font-bold sm:text-4xl"
          >{{ vm.judul }}
        </span>
        <span class="flex justify-center text-4xl font-bold sm:text-4xl"
          >{{ vm.nama_sekolah }}
        </span>
        <div
          class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-10 pt-11 lg:px-8 xl:grid-cols-2"
        >
          <div class="max-w-4xl">
            <h2 class="flex justify-center text-4xl font-bold">Visi</h2>
            <span
              class="flex justify-center text-center text-2xl font-['mono']"
              >{{ vm.visi_deskripsi }}</span
            >
          </div>
          <div class="max-w-4xl">
            <h2 class="flex justify-center text-4xl font-bold">Misi</h2>
            <span
              class="flex justify-center text-center text-2xl font-['mono']"
              >{{ vm.misi_deskripsi }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <!----Layout Tenaga Pendidikan --->
    <div class="py-24 sm:py-32 bg-white">
      <div
        class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
      >
        <div class="max-w-2xl">
          <h2
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            STRUKTUR ORGANISASI
          </h2>
          <br />
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl background-color: rgb(3 7 18);"
          >
            SD Star Generation
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            SD STAR GENERATION memiliki struktur organisasi yang dimana tenaga
            pengajar tersebut telah diakui oleh dinas pendidikan seperti yang
            tampil pada layout disamping
            <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
        <ul
          role="list"
          class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          <li v-for="person in people" :key="person.name">
            <div class="flex items-center gap-x-6">
              <!---Gambar--->
              <img
                class="h-20 w-20 rounded-full"
                :src="person.imageUrl"
                alt="Person image"
              />
              <!---Nama dan Role--->
              <div>
                <h3
                  class="text-base font-semibold leading-7 tracking-tight text-gray-900"
                >
                  {{ person.name }}
                </h3>
                <p class="text-sm font-semibold leading-6 text-indigo-600">
                  {{ person.role }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!----Layout Tentang Kami dan Hubungi Kami---->
    <div
      class="relative isolate mx-auto flex max-w-10xl items-center justify-center overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <!-- <img
        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> -->
      <div
        class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div
        class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Tentang Kami
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            SD Star Generation merupakan sekolah tingkat dasar kristen dengan
            program pembelajaran unggul dan pendidikan karakter Kristiani.
            <br />
            Satu-satunya sekolah yang memiliki 3 program bahasa yaitu Bahasa
            Inggris, Bahasa Mandarin, Bahasa Ibrani
          </p>
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"
          >
            <a v-for="link in links" :key="link.name" :href="link.href"
              >{{ link.name }} <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <dl
            class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div
              v-for="stat in stats"
              :key="stat.name"
              class="flex flex-col-reverse"
            >
              <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
              <dd
                class="text-2xl font-bold leading-9 tracking-tight text-white"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
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
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import {
  ArrowPathIcon,
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
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";
const links = [
  { name: "Susunan Komite SD Star Generation", href: "#" },
  { name: "Visi & Misi", href: "#" },
  { name: "Identitas", href: "#" },
  { name: "Kontak Komite", href: "#" },
];

const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];
const people = [
  {
    name: "Adolfina Mety",
    role: "Kepala Sekolah",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Septya Utama",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Septya Utama",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Septya Utama",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Septya Utama",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Septya Utama",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Septya Utama",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Evan Septya Utama",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
const items = [
  {
    imageUrl: "/src/assets/foto-sekolah.png",
    judul: "Upacara Sekolah",
    description:
      "Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies",
  },
  {
    imageUrl:
      "	https://jurnalsecurity.com/go/wp-content/uploads/2016/11/menanam.jpg",
    judul: "MENYIRAM",
    description:
      " Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies",
  },
  {
    imageUrl:
      "	https://jurnalsecurity.com/go/wp-content/uploads/2016/11/menanam.jpg",
    judul: "MERAWAT",
    description:
      "Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies",
  },
  {
    imageUrl:
      "	https://jurnalsecurity.com/go/wp-content/uploads/2016/11/menanam.jpg",
    judul: "Menanam",
    description:
      "Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies",
  },
  {
    imageUrl:
      "	https://jurnalsecurity.com/go/wp-content/uploads/2016/11/menanam.jpg",
    judul: "Menanam",
    description:
      "Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies Maybe we can live without libraries, people like you and me. Maybe we can live without libraries, people like you and me. Maybe.Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies",
  },
];
const gambarUrl = [
  {
    imageUrl:
      "https://www.refoindonesia.com/wp-content/uploads/2022/01/Menanam-Pohon-Sustainable-Living-Di-Sekolah.jpg",
  },
];
const visimisi = [
  {
    judul: "Visi dan Misi",
    nama_sekolah: "STAR GENERATION",
    misi_deskripsi: "MEMBANTU MEYIAPKAN GENERASI UNGGUL DAN BERDAMPAK",
    visi_deskripsi:
      "MENJADI SEKOLAH YANG UNGGUL DAN BERSAHABAT BAGI SEMUA ORANG",
  },
];
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.h-48 {
  height: 42rem;
}
.w-96 {
  width: 112rem;
}
.sm\:py-32 {
  padding-top: 3rem;
  padding-bottom: 8rem;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
