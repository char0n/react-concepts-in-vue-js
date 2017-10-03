import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/routes/hello/components/Hello';
import Ajax from '@/routes/feature1/containers/Ajax';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/feature1',
      name: 'feature1',
      component: Ajax,
    },
  ],
});
