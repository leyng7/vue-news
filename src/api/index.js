import axios from 'axios';

const config = {
  BASE_URL: 'https://api.hnpwa.com/v0'
}

function fetchNewsList() {
  return axios.get(`${config.BASE_URL}/news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.BASE_URL}/ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.BASE_URL}/jobs/1.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList
}