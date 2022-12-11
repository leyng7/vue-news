<template>
  <div>
    <ul class="news-list">
      <li v-for="item in getNews" v-bind:key="item.id" class="news-post">
        <div class="news-points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url" target="_blank">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'getNews'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS')
  },
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.news-post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.news-points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}

</style>