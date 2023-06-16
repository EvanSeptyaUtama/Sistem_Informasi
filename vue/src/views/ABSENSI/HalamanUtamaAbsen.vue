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
          class="w-20 h-20 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          ></path>
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
    judul: "Data Siswa",
  },
  {
    judul: "Data Guru",
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
