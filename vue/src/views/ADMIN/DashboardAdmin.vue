<template>
  <div>
    <div
      class="mt-20 p-10 h-32 border-2 dark:border-gray-700 bg-white rounded-lg"
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
          class="w-12 h-12"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"
          />
        </svg>

        <span>{{ boxd.judul }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
const boxData = [
  {
    judul: "Data Siswa : 200",
  },
  {
    judul: "Data Guru : 20",
  },
];
const boxSiswa = [
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 41,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 42,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 43,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 44,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 45,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 46,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 47,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 48,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 49,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 50,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 51,
  },
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 52,
  },
];
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
