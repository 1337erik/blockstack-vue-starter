import { userSession } from '../../blockstack/userSession';

const state = {

    user     : null, //JSON.parse( localStorage.getItem( 'user' ) ) || null,
    userData : null, //JSON.parse( localStorage.getItem( 'userData' ) ) || null,
    // authenticated : false,
};
const mutations = {

    saveUserSession : ( state, userSession ) => {

        state.userSession = userSession;
        // localStorage.setItem( 'userSession', JSON.stringify( userSession ) );
    },
    saveUserData : ( state, data ) => {

        state.userData = data;
        localStorage.setItem( 'userData', JSON.stringify( data ) );
    },
    saveUser : ( state, user ) => {

        state.user = user;
        localStorage.setItem( 'user', JSON.stringify( user ) );
    }

    // authenticate    : state => state.authenticated = !!state.user,
};
const actions = {

    signIn(){

        userSession.redirectToSignIn();
    },
    signOut(){

        userSession.signUserOut( window.location.origin );
    },
    saveUserSession( context, userSession ){

        context.commit( 'saveUserSession', userSession );
    },
    authenticate( context, data ){

        // context.commit( 'authenticate' );
        // context.commit( 'saveUserSession', userSession );
        context.commit( 'saveUserData', data.userData );
        context.commit( 'saveUser', data.user );
    }
};
const getters = {

    // userSession : state => userSession,
    isAuth      : state => userSession ? userSession.isUserSignedIn() : false,
    userData    : state => state.userData,
    user        : state => state.user,
};
export default {

    namespaced: true,
    state,
    mutations,
    actions,
    getters
};