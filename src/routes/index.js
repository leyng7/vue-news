import {createRouter, createWebHistory} from 'vue-router'

import NewsView from "../views/NewsView";
import AskView from "../views/AskView";
import JobsView from "../views/JobsView";
import UserView from "../views/UserView";
import ItemView from "../views/ItemView";

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news',
    component: NewsView
  },
  {
    path: '/ask',
    component: AskView
  },
  {
    path: '/jobs',
    component: JobsView
  },
  {
    path: '/user/:id',
    component: UserView
  },
  {
    path: '/item',
    component: ItemView
  }
]

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes
});

export {
  router
}
