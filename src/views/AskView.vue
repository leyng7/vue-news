<template>
  <div>
    <div v-bind:key="item.id" v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api';

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    const vm = this;
    fetchAskList()
        .then(response => vm.ask = response.data)
        .catch(error => console.log(error));
  }
}
</script>

<style></style>