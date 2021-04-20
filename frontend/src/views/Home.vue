<template>
  <div>
    <PostItem v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import utils from '@/utils/utils';
import PostItem from '@/components/home/PostItem'

export default {
  name: 'Home',
  components: {
    PostItem
  },
  computed: {
    posts: function () {
      return this.$store.state.posts.content;
    }
  },
  mounted() {
    if (!this.$store.state.posts.content.length) {
      utils.get.content('posts')
        .then(res => this.$store.commit('setPosts', utils.map.posts(res)))
    }
  }
};
</script>
