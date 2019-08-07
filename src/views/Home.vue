<template>

  <div>

    <dashboard v-if=" user " :user=" user "></dashboard>
  </div>
</template>

<script>

  import Dashboard from '@/views/Dashboard.vue';

  import { Person } from 'blockstack';
  import { userSession } from '../userSession';

  export default {

    data: () => ({

      userSession : null,
      user        : null
    }),
    created(){

      this.userSession = userSession;
    },
    mounted(){

      if ( userSession.isUserSignedIn() ) {

        this.userData      = userSession.loadUserData();
        this.user          = new Person( this.userData.profile );
        this.user.username = this.userData.username;
      } else if ( userSession.isSignInPending() ) {

        userSession.handlePendingSignIn()
          .then( ( userData ) => {

            window.location = window.location.origin;
            console.log( userData );
          });
      }
    },
    components: {

      Dashboard
    },
  };
</script>
