<template>
  <header class="sticky top-0 pt-3 bg-white sm:pb-3">

    <!-- Wrapper -->
    <div class="max-w-7xl sm:px-2 lg:px-8 flex flex-col sm:flex-row sm:justify-between">

      <!-- Logo -->
      <div class="relative border-gray-200 border-b sm:border-0 pb-3 sm:pb-0">
        <router-link to="/">
          <img class="h-10 mx-auto sm:mx-0" src="../../assets/logo.png" alt="Logo">
        </router-link>
      </div>

      <div @click="mobileNavOpen = !mobileNavOpen" class="relative mx-auto py-2 cursor-pointer sm:hidden">
        <span class="inline-block">Menu</span>
      </div>


      <!-- Navigation -->
      <nav class="relative h-full">
        <ul class="absolute flex flex-col w-full pb-2 sm:pb-0 bg-gray-200 opacity-0 transform scale-y-0 origin-top transition sm:relative sm:opacity-100 sm:scale-y-100 sm:flex-row sm:border-0 sm:bg-transparent"  :class="{'scale-y-100 opacity-100' : mobileNavOpen}">
          <li v-for="item in menu" :key="'menu-item-' + item.id" class="w-full inline-block transition text-gray-400 py-1 sm:py-0 sm:px-3 sm:h-full sm:w-auto hover:text-black">
            <router-link :to="item.path" class="w-full text-center inline-block leading-10 sm:h-full sm:w-auto">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import utils from '@/utils/utils';
import store from '@/store/store';

export default {
  name: 'Header',
  data() {
    return {
      mobileNavOpen: false
    }
  },
  computed: {
    menu: () => {
      return store.state.menu;
    }
  },
  mounted() {
    if (!store.state.menu) {
      utils.get.content('menu', { api: 'custom' })
        .then(res => utils.process.menu(res));
    }
  },
  watch:{
    $route () {
      this.mobileNavOpen = false;
    }
} 

};
</script>

<style lang="scss">
  .router-link-exact-active {
    color: black;
  }
</style>
