<template>
  <div>
    <p v-for="item in getNews" v-bind:key="item.id">
      <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  },
  computed: {
    ...mapGetters([
      'getNews'
    ])
  }
}
</script>

<style scoped>
.user {
  padding: 5px;
}
</style>