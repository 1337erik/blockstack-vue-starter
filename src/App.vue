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

  import { UserSession, AppConfig } from 'blockstack';
  import MainAppbar from './components/MainAppbar';
  import MainNavDrawer from './components/MainNavDrawer';

  import { mapGetters, mapActions } from 'vuex';

  export default {

    name: 'App',
    data: () => ({

    }),
    computed: {

      ...mapGetters({

        isAuth : 'auth/isAuth',
        userSession : 'auth/userSession'
      })
    },
    methods: {

      ...mapActions({

        saveUserSession : 'auth/saveUserSession',
        authenticate    : 'auth/authenticate',
      })
    },
    async created(){

      const appConfig   = new AppConfig([ 'store_write', 'publish_data' ]);
      const userSession = new UserSession({ appConfig });
      this.saveUserSession( userSession );

      console.log( '! is signed in: ', !userSession.isUserSignedIn() );
      console.log( 'is pending signin: ', userSession.isSignInPending() );
      // console.log( userSession.loadUserData() );

      // userSession.signUserOut( window.location.href );

      if( !userSession.isUserSignedIn() && userSession.isSignInPending() ){

        const userData = await userSession.handlePendingSignIn();
        console.log( '..got here', userData );

        if( !userData.username ){

          throw new Error( 'This app requires a name! FASCISM' );
        }

        window.location = window.location.origin;

        // userData = userSession.loadUserData()
        // user     = new Person( this.userData.profile );

        // const data = {

        //   userData,
        //   user
        // };

        // this.authenticate( data );
      }
    },
    components: {

      MainAppbar,
      MainNavDrawer
    }
  };
</script>
