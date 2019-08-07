<template>

  <div class="hello">

    <h1>Blockstack Todo</h1>
    <p>A decentralized Todo app built on <a href="https://blockstack.org" target="_blank">Blockstack</a></p>
    <button class="btn btn-default bg-white" @click.prevent="signIn">Sign In With Blockstack</button>
  </div>
</template>

<script>

  import { mapActions } from 'vuex';

  export default {

    methods: {

      ...mapActions({

        signIn : 'auth/signIn'
      })
    }
  }
</script>

<style scoped>
</style>
