import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import router from '../router';
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/scss/bootstrap.scss'
import './assets/js/responsive.js'
import './scss/style.scss'

createApp(App)
  .use(router)
  .mount('#app');
  