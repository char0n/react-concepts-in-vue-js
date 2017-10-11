// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './App';
import router from './routes';
import createStore from './store';


Vue.config.productionTip = false;


const createApp = () => {
  const store = createStore();

  sync(store, router);

  return new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App },
  });
};


export default createApp;
