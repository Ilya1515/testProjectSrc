import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './components/router/routes';
import store from './components/store/index';
import vmodal from 'vue-js-modal';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import * as fb from 'firebase';
import 'swiper/swiper-bundle.css';

Vue.use(Vuelidate);
Vue.use(VueAwesomeSwiper);
Vue.use(vmodal);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,
  created (){
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBEJHWit8Tf8kMgwMQp9-BqsfDePUjzmY0",
    authDomain: "mishka-store.firebaseapp.com",
    databaseURL: "https://mishka-store.firebaseio.com",
    projectId: "mishka-store",
    storageBucket: "mishka-store.appspot.com",
    messagingSenderId: "904866603328",
    appId: "1:904866603328:web:c3170b57e595e7aca51aa5",
    measurementId: "G-M3PT7CSQD2"
  };
  // Initialize Firebase
  fb.initializeApp(firebaseConfig);
  fb.analytics();
  fb.auth().onAuthStateChanged(user => {
    if(user){
      this.$store.dispatch('autoLoginUser', user);
    }
  });
  this.$store.dispatch('fetchProducts');
  }
}).$mount('#app');
