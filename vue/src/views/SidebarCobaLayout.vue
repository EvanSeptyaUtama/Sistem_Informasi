<template>
  <div class="flex-1 flex overflow-hidden">
    <!-- Primary column -->
    <section
      aria-labelledby="primary-heading"
      class="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
    >
      <h1 id="primary-heading" class="sr-only">Account</h1>
      <!-- Your content -->
    </section>

    <!-- Secondary column (hidden on smaller screens) -->
    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
      <div
        class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white overflow-y-auto"
      >
        <router-view></router-view>
      </div>
    </aside>
  </div>
</template>
<script></script>
