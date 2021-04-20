<template>
  <div id="app" class="font-sans">
    <Header />
    <main class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <router-view/>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
import Header from '@/components/general/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
