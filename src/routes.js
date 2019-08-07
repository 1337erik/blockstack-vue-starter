import SignIn from './views/SignIn.vue';


export default [

    {
        path      : '/signin',
        name      : 'signin',
        title     : 'Sign in',
        icon      : 'mdi-whistle',
        onSideNav : false,
        component : SignIn
    },
    {
        path      : '/',
        name      : 'dashboard',
        title     : 'Dashboard',
        icon      : 'mdi-view-dashboard',
        onSideNav : true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    }
];