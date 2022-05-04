import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#4fc08d',
        secondary: '#e91e63',
        text1: '#ffffff',
        btnAdd:'#4fc08d',
        btnSub :'#e91e63'
      },
      dark: {
        primary: '#ff0000',
        secondary: '#e91e63',
        text1: '#ffffff',
        btnAdd:'#4fc08d',
        btnSub :'#e91e63'
      },
    },
  },
})
