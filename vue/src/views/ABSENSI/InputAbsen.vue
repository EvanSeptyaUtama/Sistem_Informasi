<template>
  <div>
    <div class="mt-14 p-10 border-2 dark:border-gray-700 bg-white rounded-lg">
      <div>
        <span class="text-3xl">Admin 4</span>
      </div>
      <div>
        <span class="text-lg">Selamat datang di halaman absen!</span>
      </div>
    </div>
    <div
      class="grid md:flex border-2 bg-white border-gray-200 rounded-lg dark:border-gray-700 mt-10"
    >
      <div class="justify-items-center p-4">
        <img class="object-fill" src="../../assets/logo_stargen.png" />
      </div>
      <div class="p-10">
        <div>
          <h2 class="max-w-4xl text-4xl font-bold">STAR GENERATION</h2>
        </div>
        <div>
          <span class="mt-3 text-3xl font-semibold">
            Jl. APT Pranoto No.RT.35 NO.99A, Sangatta Utara, Kec. Sangatta
            Utara, Kabupaten Kutai Timur, Kalimantan Timur 75683
          </span>
        </div>
      </div>
    </div>
    <div
      class="grid gap-x-8 gap-y-4 p-5 grid-cols-1 lg:grid-cols-3 bg-white mt-10 rounded-lg border-2 dark:border-gray-700"
    >
      <button
        class="p-5 box-content border-4 bg-gray-100 hover:bg-slate-200 hover:border-gray-200 border-gray-300 rounded-lg dark:border-gray-700 text-center text-2xl"
        v-for="boxg in boxGuru"
        :key="boxg.name"
      >
        <span>{{ boxg.judul }}</span>
      </button>
    </div>

    <div
      class="grid gap-x-8 gap-y-4 p-5 grid-cols-1 lg:grid-cols-3 bg-white mt-10 rounded-lg border-2 dark:border-gray-700"
    >
      <button
        v-for="boxs in boxSiswa"
        :key="boxs.name"
        class="grid gap-x-8 gap-y-2 p-5 box-content border-4 bg-gray-100 hover:bg-slate-200 hover:border-gray-200 border-gray-300 rounded-lg dark:border-gray-700 text-center text-2xl"
      >
        <span>{{ boxs.nama_walikelas }}</span>
        <span>{{ boxs.kelas }}</span>
        <span>Jumlah Siswa : {{ boxs.jumlah_siswa }}</span>
      </button>
    </div>

    <div class="flex gap-x-5 gap-y-5 p-5 bg-white mt-10 border-2 border-black">
      <a
        class="box-content w-40 border-4 bg-gray-100 hover:bg-slate-200 hover:border-gray-200 border-gray-300 rounded-lg dark:border-gray-700 text-center text-2xl"
        href="/halamaninputabsenguru"
      >
        Input Data Guru
      </a>
      <a
        class="box-content border-4 w-40 bg-gray-100 hover:bg-slate-200 hover:border-gray-200 border-gray-300 rounded-lg dark:border-gray-700 text-center text-2xl"
        href="/halamaninputabsensiswa"
      >
        Input Data Siswa
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
const boxGuru = [
  {
    judul: "ABSEN GURU",
    src: "",
  },
];
const boxSiswa = [
  {
    nama_walikelas: "Adolfina Mety",
    kelas: "IVB",
    jumlah_siswa: 41,
  },
  {
    nama_walikelas: "Ryan Garcia",
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
