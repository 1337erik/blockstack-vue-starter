const state = {

    drawerOpen : true
};
const mutations = {

    toggleDrawer : state => state.drawerOpen = !state.drawerOpen
};
const actions = {

    toggleDrawer( context ){

        context.commit( 'toggleDrawer' );
    }
};
const getters = {

    drawerOpen : state => state.drawerOpen
};
export default {

    namespaced: true,
    state,
    mutations,
    actions,
    getters
};