<template>
  <div>
    <div class="grid justify-items-center">
      <span class="text-4xl lg:text-7xl text-gray-900 font-mono font-extrabold">
        SEJARAH
      </span>
      <span class="lg:text-3xl text-gray-900 font-bold">
        TENTANG STAR GENERATION
      </span>
    </div>

    <div class="" v-for="sejarah in sjrh" :key="sejarah.name">
      <div class="py-2">
        <img class="rounded-md" src="../../assets/foto-sekolah.png" />
      </div>
      <div class="text-justify text-lg lg:text-2xl">
        <p>
          SEJARAH, menurut Kamus Besar Bahasa Indonesia (KBBI), diartikan
          sebagai asal-usul (keturunan) silsilah, kejadian dan peristiwa yang
          benar-benar terjadi pada masa lampau, riwayat, tambo, sebuah
          pengetahuan atau uraian tentang peristiwa dan kejadian yang
          benar-benar terjadi pada masa lampau atau ilmu sejarah. SEJARAH,
          menurut Kamus Besar Bahasa Indonesia (KBBI), diartikan sebagai
          asal-usul (keturunan) silsilah, kejadian dan peristiwa yang
          benar-benar terjadi pada masa lampau, riwayat, tambo, sebuah
          pengetahuan atau uraian tentang peristiwa dan kejadian SEJARAH,
          menurut Kamus Besar Bahasa Indonesia (KBBI), diartikan sebagai
          asal-usul (keturunan) silsilah, kejadian dan peristiwa yang
          benar-benar terjadi pada masa lampau, riwayat, tambo, sebuah
          pengetahuan atau uraian tentang peristiwa dan kejadian yang
          benar-benar terjadi pada masa lampau atau ilmu sejarah. SEJARAH,
          menurut Kamus Besar Bahasa Indonesia (KBBI), diartikan sebagai
          asal-usul (keturunan) silsilah, kejadian dan peristiwa yang
          benar-benar terjadi pada masa lampau, riwayat, tambo, sebuah
          pengetahuan atau uraian tentang peristiwa dan kejadian
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
const sjrh = [{}];
</script>

<style></style>
