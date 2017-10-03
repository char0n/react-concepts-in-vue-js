import Vuex from 'vuex';
import Vue from 'vue';

import feature1Plugin from '@/routes/feature1/plugin';
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
  plugins: [
    feature1Plugin(),
  ],
});


export default store;
