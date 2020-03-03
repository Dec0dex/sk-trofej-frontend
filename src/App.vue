<template>
  <v-app id="app">
    <div>
      <v-fade-transition mode="out-in">
        <main>
          <router-view />
        </main>
      </v-fade-transition>
      <v-btn
          v-scroll="onScroll"
          v-show="isScrolling"
          fab
          dark
          fixed
          bottom
          right
          color="accent"
          @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
  // import TokenService from './core/token.service';
  import "./styles/main.scss"

  export default {
    name: 'App',
    data() {
      return {
        isScrolling: false,
      }
    },
    methods: {
      onScroll() {
        this.isScrolling = (window.pageYOffset ||
            document.documentElement.scrollTop || 0) > 20;
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
    },
    created() {
      // let token = TokenService.getToken();
      //
      // if (token === null || token === '') {
      //   this.$router.push({ name: "login" });
      // } else {
      //   this.$router.push({ name: "dashboard" });
      // }
    },
  };
</script>

<style scoped lang="scss">
</style>