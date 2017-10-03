import getters from './getters';
import mutations from './mutations';


const initialState = {
  serverDataCopy: null,
};


export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
};
