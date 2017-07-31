/**
 * Created by lihui on 2017/7/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import asideNavMenu from './modules/asideNavMenu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    asideNavMenu
  }
})
