import axios from 'axios';

const config = {
  BASE_URL: 'https://api.hnpwa.com/v0'
}

function fetchNewsList() {
  return axios.get(`${config.BASE_URL}/news/1.json`)
}

function fetchAskList() {
  return axios.get(`${config.BASE_URL}/ask/1.json`)
}

function fetchJobsList() {
  return axios.get(`${config.BASE_URL}/jobs/1.json`)
}

function fetchUserInfo(userName) {
  return axios.get(`${config.BASE_URL}/user/${userName}.json`)
}

function fetchItemInfo(id) {
  return axios.get(`${config.BASE_URL}/item/${id}.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemInfo
}