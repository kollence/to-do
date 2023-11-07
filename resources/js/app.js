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

//Check if user is authenticated on backend
router.beforeEach(async (to, from, next) => {
    const protectedRouteNames = ['todos', 'todo.create', 'todo.edit', 'todo.show'];
    if (protectedRouteNames.includes(to.name)) {
      // Check the user's authentication status by making a request to /api/user
      try {
        // Make an authenticated GET request to your backend
        const response = await axios.get('/api/user');
        if (response.statusText == "OK") {
          // User is authenticated, continue navigating
          next();
        } else {
          // User is not authenticated, redirect to a login or unauthorized route
          next({ name: 'login' });
        }
      } catch (error) {
        // Handle network errors or any other issues
        console.error('Authentication check failed:', error);
        next({ name: 'error' });
      }
    } else {
      // For other routes, no authentication check is needed, so continue navigating
      next();
    }
  });

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