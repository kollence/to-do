import './bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import 'sweetalert2/dist/sweetalert2.min.css';

import VueSweetalert2 from 'vue-sweetalert2';
import { createApp } from 'vue';

import Vuex from 'vuex';
import auth from './store/auth'
import todo from './store/todo'

import router from './routes'
import App from './App.vue';


const app = createApp(App);

const store = new Vuex.Store({
    modules: {
        auth,
        todo
    }
})
app.use(router)
app.use(VueSweetalert2);
app.use(store) 
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js";