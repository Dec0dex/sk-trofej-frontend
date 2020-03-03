<template>
  <div v-bind="attrs">
    <Toolbar></Toolbar>
    <HomeComponent ></HomeComponent>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../components/common/Footer';
  import Toolbar from '../components/common/Toolbar';
  import HomeComponent from '../components/view/HomeComponent';

  export default {
    name: 'Home',
    components: {HomeComponent, Toolbar, Footer},
    computed: {
      attrs () {
        return {
          key: this.$route.path,
          style: {
            minHeight: 'calc(100vh - ' + this.$vuetify.application.top + 'px',
          }
        }
      }
    }
  };
</script>

<style scoped>

</style>