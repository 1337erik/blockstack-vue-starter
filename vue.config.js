module.exports = {

    publicPath : process.env.NODE_ENV === 'production' ? '/blockstack-vue-starter/dist/' : '/',
    devServer  : {

        headers: {

            'Access-Control-Allow-Origin'  : '*',
            'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers' : 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding'
        }
    }
}