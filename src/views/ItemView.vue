<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <div class="user-description">
            <router-link v-bind:to="`/user/${fetchedItem.user}`">
              {{ fetchedItem.user }}
            </router-link>
            <div class="time">
              {{ fetchedItem.time_ago }}
            </div>
          </div>
        </div>
        <h2>{{ fetchedItem.title }}</h2>
      </div>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
    <p></p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id)
  },
}
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
}

.user-description {

}

.time {
  font-size: 0.7rem;
}
</style>