<template>
  <div>
    <header class="bg-gray-100 shadow">
      <div class="mx-auto max-w-7xl text-center px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
          STAR GENERATION
        </h1>
        <h2 class="text-4xl font-semibold text-center text-gray-800 mb-8">
          Pendaftaran Peserta Didik Baru
        </h2>
      </div>
    </header>
    <main>
      <section class="container mx-auto px-6 p-6">
        <img src="" alt="" />
        <!----Layout gambar prosedur---->
        <div class="flex items-center flex-wrap mb-15">
          <div class="grid w-full md:w-1/2 place-content-center">
            <img
              class="max-h-[32rem] md:max-w-[32rem] rounded-lg border-slate-300 border-2"
              src="/src/assets/prosedur_psb_stargen.png"
              alt="Reporting"
            />
          </div>
          <!----Layout tulisan prosedur---->
          <div class="w-full md:w-1/2">
            <h4 class="text-center text-5xl text-gray-800 font-bold mb-3">
              Membuka Pendaftaran
            </h4>
            <div class="grid lg:grid-row-2 pt-5">
              <div class="flex pt-10">
                <span class="text-1xl"> > Link daftar dibawah : </span>
              </div>
              <div>
                <a href="https://linktr.ee/sdstargen"
                  ><span
                    class="text-indigo-500 hover:text-blue-950 font-semibold text-2xl"
                    >https://linktr.ee/sdstargen</span
                  ></a
                >
              </div>
            </div>

            <span class="flex pt-10 text-3xl justify-center font-mono"
              >Informasi Alur Pendaftaran</span
            >

            <div class="flex justify-center">
              <img
                src="https://pendaftaran.gagasceria.com/images/alurpendaftaran.jpg"
                alt=""
                class="absolute w-1/3 h-96"
              />
            </div>

            <div class="pt-80"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "dashboardpsb",
};
</script>
<style scoped></style>
