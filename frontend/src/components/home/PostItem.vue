<template>
  <router-link class="w-full cursor-pointer" :to="'/post/' + post.id">
    <article class="m-2 rounded-lg bg-gray-100 transition hover:bg-gray-200 overflow-hidden">
      <img class="w-full" :src="post.image.sizes.large" :alt="post.image.title">
      <h1 class="p-5 ">{{ post.title }}</h1>
    </article>
  </router-link>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object
  }
}
</script>