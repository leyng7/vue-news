<template>
  <div>
    <p v-bind:key="item.id" v-for="item in getJobs">
      <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
      <small v-if="item.domain">{{ item.time_ago }} by {{ item.domain }}</small>
      <small v-else>{{ item.time_ago }}</small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  },
  computed: {
    ...mapGetters([
      "getJobs"
    ])
  }
}
</script>

<style></style>