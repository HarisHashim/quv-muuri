import Vue from 'vue'
import Vuex from 'vuex'

import dash from './dash';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules : {
    dash
  }
})

export default store
