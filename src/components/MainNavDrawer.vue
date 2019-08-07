<template>

    <v-navigation-drawer

        app
        :value=" drawerOpen "
    >

        <v-list nav>

            <v-list-item>

                <v-list-item-action>

                    <v-icon @click.stop=" toggleDrawer() ">mdi-menu</v-icon>
                </v-list-item-action>

                <v-list-item-content>

                    <v-list-item-title>BlockStack CRM</v-list-item-title>
                </v-list-item-content>

            </v-list-item>
            <v-list-item
                v-for=" ( route, index ) in filteredRoutes "
                :key=" index "
                :to=" route.path "
            >

                <v-list-item-action>

                    <v-icon>{{ route.icon }}</v-icon>
                </v-list-item-action>

                <v-list-item-content>

                    <v-list-item-title>{{ route.title }}</v-list-item-title>
                </v-list-item-content>

            </v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {

        methods: {

            ...mapActions({

                toggleDrawer : 'nav/toggleDrawer'
            })
        },
        computed: {

            ...mapGetters({

                drawerOpen : 'nav/drawerOpen',
                routes     : 'routes'
            }),
            filteredRoutes(){

                return this.routes.filter( r => r.onSideNav );
            }
        }
    }
</script>

<style>

</style>
