import { noop } from 'ramda-adjunct';

import module from './module';

// this can be done better in the future when following issue is resolved:
// https://github.com/vuejs/vuex/issues/467

const subfeaturePlugin = ({ namespace = 'feature1/subfeature' } = {}) => (store) => {
  store.registerModule(namespace, module);

  // this is the place where we handle our complex side effects
  store.subscribe(noop);
};


export default subfeaturePlugin;
