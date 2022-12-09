<template>
  <div>
    <div v-bind:key="item.id" v-for="item in fetchedAsk">
      <div class="user">{{ item.title }}</div>
    </div>
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
      'fetchedAsk'
    ])
  }
}
</script>

<style></style>