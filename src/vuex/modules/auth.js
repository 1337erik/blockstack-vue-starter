import { UserSession, AppConfig } from 'blockstack';

const appConfig   = new AppConfig([ 'store_write', 'publish_data' ]);
const userSession = new UserSession({ appConfig });

const state = {

    userSession
};
const mutations = {

    // toggleDrawer : state => state.drawerOpen = !state.drawerOpen
};
const actions = {

    signIn( context ){

        context.state.userSession.redirectToSignIn();
    }
};
const getters = {

    userSession : state => state.userSession,
    isAuth      : state => state.userSession.isUserSignedIn() // is this going to carry a performance cost? check what this method call entails..
};
export default {

    namespaced: true,
    state,
    mutations,
    actions,
    getters
};