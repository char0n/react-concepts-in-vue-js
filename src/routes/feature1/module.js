import mutations from './mutations';
import actions from './actions';
import getters from './getters';


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
};
