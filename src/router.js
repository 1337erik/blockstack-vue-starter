import Vue from 'vue';
import Router from 'vue-router';

import routes from './routes';

import store from './vuex/store';

Vue.use( Router );

const router = new Router({

  mode   : 'history',
  base   : process.env.BASE_URL,
  routes
})

router.beforeEach( ( to, from, next ) => {

  if( ! store.getters[ 'auth/isAuth' ] ) next({ name: 'signin' });
  // basic blockstack auth guard

  next();
});

export default router;