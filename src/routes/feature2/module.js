import getters from './getters';


const initialState = {
  users: [
    { name: 'Vladimir', surname: 'Gorej', email: 'vladimir.gorej@gmail.com' },
    { name: 'John', surname: 'Doe', email: 'john@doe.com' },
  ],
};


export default {
  namespaced: true,
  state: initialState,
  getters,
};
