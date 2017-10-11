import { noop } from 'lodash/fp';

import module from './module';


// this can be done better in the future when following issue is resolved:
// https://github.com/vuejs/vuex/issues/467

const feature2Plugin = ({ namespace = 'feature2' } = {}) => (store) => {
  store.registerModule(namespace, module);

  // this is the place where we handle our complex side effects
  store.subscribe(noop);

  // this is the place where we handle our watches
  store.watch(
    () => store.getters['feature1/serverData'],
    (newValue, oldValue) => newValue === oldValue,
  );
};


export default feature2Plugin;
