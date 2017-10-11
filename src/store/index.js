import Vuex from 'vuex';
import Vue from 'vue';

import feature1Plugin from '@/routes/feature1/plugin';
import feature2Plugin from '@/routes/feature2/plugin';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';


Vue.use(Vuex);


const initialState = {
  globalProp: 0,
};


const createStore = ({ strict = true } = {}) => new Vuex.Store({
  strict,
  state: initialState,
  getters,
  actions,
  mutations,
  plugins: [
    feature1Plugin(),
    feature2Plugin(),
  ],
});


export default createStore;
