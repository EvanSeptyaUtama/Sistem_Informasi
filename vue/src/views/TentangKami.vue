<template>
  <!----Sidebar bagian Tentang Kami---->
  <div class="flex mx-auto max-w-7xl pt-7">
    <div class="flex">
      <header class="bg-white rounded-xl hidden lg:block">
        <nav class="items-center justify-between">
          <div class="flex flex-col p-3 bg-blue-100 rounded-lg w-60">
            <div class="space-y-3">
              <div class="flex-1">
                <ul class="pt-4 pb-4 space-y-1 text-xl">
                  <li data-aos="fade-up-right" class="rounded-sm">
                    <a
                      href="/sejarah"
                      class="flex items-center p-2 space-x-3 rounded-md hover:bg-indigo-400 bg-indigo-200"
                    >
                      <span>Sejarah</span>
                    </a>
                  </li>

                  <li data-aos="fade-up-right" class="rounded-sm pt-3">
                    <a
                      href="/organisasi"
                      class="flex items-center p-2 space-x-3 rounded-md hover:bg-indigo-400 bg-indigo-200"
                    >
                      <span>Organisasi</span>
                    </a>
                  </li>
                  <li data-aos="fade-up-left" class="rounded-sm pt-3">
                    <a
                      href="/identitas"
                      class="flex items-center p-2 space-x-3 rounded-md hover:bg-indigo-400 bg-indigo-200"
                    >
                      <span>Profil</span>
                    </a>
                  </li>
                  <li data-aos="fade-up-right" class="rounded-sm pt-3">
                    <a
                      href="/kontakkomite"
                      class="flex items-center p-2 space-x-3 rounded-md hover:bg-indigo-400 bg-indigo-200"
                    >
                      <span>Kontak Komite</span>
                    </a>
                  </li>
                  <li data-aos="fade-up-right" class="rounded-sm pt-3">
                    <a
                      href="/halamaninputabsenguru"
                      class="flex items-center p-2 space-x-3 rounded-md hover:bg-indigo-400 bg-indigo-200"
                    >
                      <span>Kontak Komite</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main class="mx-5">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });
const isOpen = ref(false);
</script>

<style></style>
