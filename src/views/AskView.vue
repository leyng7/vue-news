<template>
  <div>
    <p v-for="item in getAsk" v-bind:key="item.id">
      <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getAsk'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>

<style></style>