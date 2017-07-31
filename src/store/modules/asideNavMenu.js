/**
 * Created by lihui on 2017/7/30.
 */
// import * as constants from '../../constants'
import axios from 'axios'

const state = {
  menuTree: []
}

const getters = {
  getAsideMenuTree: state => state.menuTree
}

const actions = {
  getAsideMenuTree: function ({commit, state}) {
    /** @namespace Vue.$http */
    axios.get('/api/getMenuTree', {
      params: {
        ID: 12345
      }
    })
      .then(function (response) {
        commit('getAsideMenuTree', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

const mutations = {
  getAsideMenuTree: function (state, payload) {
    state.menuTree = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
