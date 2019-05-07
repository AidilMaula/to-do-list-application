import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyCfEBPTfEuC3jzCC_nAPvIIZ-Y87hy1kGE",
  authDomain: "vuejs-757ff.firebaseapp.com",
  databaseURL: "https://vuejs-757ff.firebaseio.com",
  projectId: "vuejs-757ff",
  storageBucket: "vuejs-757ff.appspot.com",
  messagingSenderId: "788940271689"
  }

firebase.initializeApp(config)

export const db = firebase.firestore()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
