<template>

  <v-app>

    <main-appbar v-if=" isAuth "/>
    <main-nav-drawer v-if=" isAuth "/>

    <v-content>

      <v-container :fluid=" !isAuth ">

        <router-view></router-view>
      </v-container>

    </v-content>
  </v-app>
</template>

<script>

  import { userSession } from './blockstack/userSession';
  import { Person } from 'blockstack';

  import MainAppbar from './components/MainAppbar';
  import MainNavDrawer from './components/MainNavDrawer';

  import { mapGetters, mapActions } from 'vuex';

  export default {

    name: 'App',
    data: () => ({

      userSession : null
    }),
    computed: {

      ...mapGetters({

        isAuth      : 'auth/isAuth',
        // userSession : 'auth/userSession'
      })
    },
    methods: {

      ...mapActions({

        // saveUserSession : 'auth/saveUserSession',
        authenticate    : 'auth/authenticate',
      })
    },
    created(){

      this.userSession = userSession;
    },
    mounted(){

      console.log( 'is signed in: ', userSession.isUserSignedIn() );
      console.log( 'is pending signin: ', userSession.isSignInPending() );

      if( userSession.isUserSignedIn() ){

        const userData = userSession.loadUserData();
        console.log( 'got data: ', userData );

        const user = new Person( this.userData.profile );
        console.log( 'got a user: ', user );
      } else if ( userSession.isSignInPending() ){

        userSession.handlePendingSignIn()
          .then( ( userData ) => {

          window.location = window.location.origin;
        })
      }
    },
    components: {

      MainAppbar,
      MainNavDrawer
    }
  };
</script>
