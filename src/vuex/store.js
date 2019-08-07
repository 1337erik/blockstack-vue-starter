import Vue from 'vue';
import Vuex from 'vuex';

import nav from './modules/nav';
import auth from './modules/auth';

import routes from '../routes';

Vue.use( Vuex );

export default new Vuex.Store({

    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {

        routes : () => routes
    },
    modules: {

        nav,
        auth
    }
})
