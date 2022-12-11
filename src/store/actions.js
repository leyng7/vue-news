import {fetchAskList, fetchItemInfo, fetchJobsList, fetchNewsList, fetchUserInfo} from "@/api";

export default {
  FETCH_NEWS({commit}) {
    fetchNewsList()
      .then(({data}) => commit('SET_NEWS', data))
      .catch(error => console.error(error))
  },
  FETCH_JOBS({commit}) {
    fetchJobsList()
      .then(({data}) => commit('SET_JOBS', data))
      .catch(error => console.error(error))
  },
  FETCH_ASK({commit}) {
    fetchAskList()
      .then(({data}) => commit('SET_ASK', data))
      .catch(error => console.error(error))
  },
  FETCH_USER({commit}, username) {
    fetchUserInfo(username)
      .then(({data}) => commit('SET_USER', data))
      .catch(error => console.error(error))
  },
  FETCH_ITEM({commit}, id) {
    fetchItemInfo(id)
      .then(({data}) => commit('SET_ITEM', data))
      .catch(error => console.error(error))
  }
}