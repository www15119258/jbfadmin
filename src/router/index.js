/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'
import * as constants from '../constants'
import Page404 from '../pages/Page404'
import Dashboard from '../pages/Dashboard'
import DictList from '../pages/config/DictList'
import UserList from '../pages/security/UserList'

Vue.use(Router)

let adminPath = constants.ADMIN_PATH

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: adminPath + 'dashboard',
      component: Dashboard
    },
    {
      path: adminPath + 'dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: adminPath + 'config/dict',
      name: 'DictList',
      component: DictList
    },
    {
      path: adminPath + 'security/user',
      name: 'UserList',
      title: '用户列表',
      component: UserList
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
