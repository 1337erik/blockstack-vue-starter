<template>

  <v-app>

    <main-appbar v-if=" isAuth "/>
    <main-nav-drawer v-if=" isAuth "/>

    <v-content>

      <v-container>

        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  import MainAppbar from './components/MainAppbar';
  import MainNavDrawer from './components/MainNavDrawer';

  import { mapGetters } from 'vuex';

  export default {

    name: 'App',
    data: () => ({

    }),
    computed: {

      ...mapGetters({

        isAuth : 'auth/isAuth'
      })
    },
    components: {

      MainAppbar,
      MainNavDrawer
    }
  };
</script>
