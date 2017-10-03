import { mapMutations } from 'vuex';

import { SERVER_DATA_SUCCESS, serverDataSuccess } from '../mutations';


// this can be done better in the future when following issue is resolved:
// https://github.com/vuejs/vuex/issues/467

const subfeaturePlugin = ({ namespace = 'feature1/subfeature' } = {}) => (store) => {
  // this is the place where we handle our complex side effects
  const mutations = {
    $store: store,
    ...mapMutations(namespace, {
      serverDataSuccess: (commit, payload) => commit(serverDataSuccess(payload)),
    }),
  };

  // commit mutation of this subfeature
  store.subscribe((mutation) => {
    if (mutation.type === `feature1/${SERVER_DATA_SUCCESS}`) {
      mutations.serverDataSuccess(mutation.payload.serverData);
    }
  });
};


export default subfeaturePlugin;
