import './bootstrap';
import { createApp } from 'vue';

import Vuex from 'vuex';
import counter from './store/counter/index';

import router from './routes/index'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.css";
const app = createApp(App);
app.use(router)
const store = new Vuex.Store({
    modules: {
        counter
    }
})
app.use(store) 
app.mount('#app')
import "bootstrap/dist/js/bootstrap.js";