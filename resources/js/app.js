import './bootstrap';
// import BootstrapVue from 'bootstrap-vue' //Importing

import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css";
const app = createApp(App);
// app.use(BootstrapVue) 
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js";