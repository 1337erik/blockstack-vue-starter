<template>

  <div>

    <section>

      <v-parallax src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="700">

        <v-layout column align-center justify-center>

          <v-layout column justify-center align-center>

            <v-card class="py-5">

              <h1 class="main-hero-header text-center">Blockstack Vue</h1>

              <v-card-title>A decentralized Todo app built on</v-card-title>
              <v-card-text class="text-center"><a href="https://blockstack.org" target="_blank">Blockstack</a></v-card-text>
              <v-card-actions>

                <v-btn class="primary mx-auto" @click.prevent=" signIn ">Sign In With Blockstack</v-btn>
              </v-card-actions>
            </v-card>
          </v-layout>
        </v-layout>
      </v-parallax>
    </section>
    <section style="height:500px">

      <v-layout
        column
        wrap
        class="my-5"
        align-center>

        <v-flex xs12 sm4 class="mt-1 mb-5">

          <div class="text-center">

            <h2 class="headline">A resource for optimizing your health</h2>

            <span class="subheading">In today's world there is a huge need to stay on top of our health</span>
          </div>
        </v-flex>
        <v-flex xs12>

            <v-container grid-list-xl>

                <v-layout row wrap align-center>

                  <v-flex xs12 md4 v-for=" ( card, index ) in cards " :key=" index ">

                    <v-card class="elevation-0 transparent">

                      <v-card-text class="text-center">

                        <v-icon x-large class="primary--text text--lighten-2">{{ card.icon }}</v-icon>

                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">

                        <div class="headline text-center">{{ card.title }}</div>

                      </v-card-title>
                      <v-card-text class="text-center">

                        {{ card.body }}

                      </v-card-text>
                    </v-card>
                  </v-flex>

                </v-layout>
            </v-container>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>

  import { mapActions } from 'vuex';

  export default {

    data: () => ({

      cards: [

        {
          'title' : 'Mind',
          'icon'  : 'mdi-school',
          'body'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        },
        {
          'title' : 'Body',
          'icon'  : 'mdi-weight-pound',
          'body'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        },
        {
          'title' : 'Spirit',
          'icon'  : 'mdi-spa',
          'body'  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        }
      ]
    }),
    methods: {

      ...mapActions({

        signIn : 'auth/signIn'
      })
    }
  }
</script>

<style scoped>
</style>
