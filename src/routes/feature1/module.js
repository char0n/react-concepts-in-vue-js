import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import subfeature from './subfeature/module';


const initialState = {
  serverData: null,
  serverDataFetching: false,
};


export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters,
  modules: {
    subfeature,
  },
};
