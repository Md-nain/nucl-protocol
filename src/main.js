import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue';
import router from '../router';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/scss/bootstrap.scss';
import './assets/js/responsive.js';
import './scss/style.scss';

const pinia = createPinia()

const app = createApp(App);
  
app
  .use(router)
  .use(pinia)
  .mount('#app');



  