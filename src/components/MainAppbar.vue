<template>

    <v-app-bar app>

        <v-app-bar-nav-icon @click.stop=" toggleDrawer() "></v-app-bar-nav-icon>
        <v-toolbar-title class="headline text-uppercase">

            <span>BlockStack</span>
            <span class="font-weight-light">CRM</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>

    import { mapActions } from 'vuex';

    export default {

        methods: {

            ...mapActions({

                toggleDrawer : 'nav/toggleDrawer'
            })
        }
    }
</script>

<style scoped>

</style>
