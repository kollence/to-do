import './bootstrap';
import "bootstrap/dist/css/bootstrap.css";

import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue';

import Vuex from 'vuex';
import counter from './store/counter';
import auth from './store/auth'

import router from './routes'
import App from './App.vue';


const app = createApp(App);
app.use(router)
const store = new Vuex.Store({
    modules: {
        counter,
        auth
    }
})
app.use(VueSweetalert2);
app.use(store) 
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js";