import module from './module';

import { SERVER_DATA_FAILURE } from './mutations';


// this can be done better in the future when following issue is resolved:
// https://github.com/vuejs/vuex/issues/467

const feature1Plugin = ({ namespace = 'feature1' } = {}) => (store) => {
  store.registerModule(namespace, module);

  // this is the place where we handle our complex side effects
  store.subscribe((mutation) => {
    // handle failure of data fetch from the server
    if (mutation.type === `${namespace}/${SERVER_DATA_FAILURE}`) {
      alert('Server data failed to fetch!'); // eslint-disable-line no-alert
    }
  });
};


export default feature1Plugin;
