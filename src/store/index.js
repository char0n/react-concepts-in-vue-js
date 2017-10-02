import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';


Vue.use(Vuex);


const initialState = {
  globalProp: 0,
};


const store = new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
  plugins: [],
});


export default store;
