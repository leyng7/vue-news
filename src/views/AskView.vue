<template>
  <div>
    <p v-for="item in getAsk" v-bind:key="item.id">
      <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
  computed: {
    ...mapGetters([
      'getAsk'
    ])
  }
}
</script>

<style></style>