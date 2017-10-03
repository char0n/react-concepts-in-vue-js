import module from './module';


// this can be done better in the future when following issue is resolved:
// https://github.com/vuejs/vuex/issues/467

const feature2Plugin = ({ namespace = 'feature2' } = {}) => (store) => {
  store.registerModule(namespace, module);
};


export default feature2Plugin;
