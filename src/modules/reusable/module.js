import mutations from './mutations';
import getters from './getters';


const initialState = () => ({
  counter: 0,
});


export default {
  namespaced: true,
  state: initialState,
  mutations,
  getters,
};
