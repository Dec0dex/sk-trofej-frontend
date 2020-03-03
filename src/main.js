import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';
import vPlayBack from 'v-playback';
import VueYouTubeEmbed from 'vue-youtube-embed';


Vue.config.productionTip = false;

Vue.use(vPlayBack);
Vue.use(VueYouTubeEmbed);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD2ooY8NNp8k7tH4yHMYNSzi96mG8H9kW4',
    libraries: 'places',
  },
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
