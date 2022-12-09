<template>
  <div>
    <div v-bind:key="item.id" v-for="item in this.$store.state.ask">
      <div class="user">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style></style>