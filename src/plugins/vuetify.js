import Vue from 'vue'
import Vuetify from 'vuetify'
// import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
});

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#2b2b28', // #E53935
        secondary: '#10100f', // #FFCDD2
        accent: '#ff6000', // #3F51B5
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
};

export default new Vuetify(opts)
