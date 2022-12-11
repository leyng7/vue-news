import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";

const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    getJobs(state) {
      return state.jobs;
    },
    getNews(state) {
      return state.news;
    },
    getAsk(state) {
      return state.ask;
    }
  },
  mutations: mutations,
  actions: actions
})

export {
  store
}
