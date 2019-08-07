import Vue from 'vue';
import App from './App.vue';

// Vuex
import store from './vuex/store';

// Router
import router from './router';

// PWA
import './registerServiceWorker';

// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import vuetify from './plugins/vuetify';

// BlockStack
window.blockstack = require( 'blockstack' );

Vue.config.productionTip = false;

new Vue({

  router,
  store,
  vuetify,
  render: h => h( App )
}).$mount( '#app' )
