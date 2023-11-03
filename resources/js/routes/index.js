import { createRouter, createWebHistory } from 'vue-router';

import AuthLayout from '../layouts/AuthLayout.vue'
import GuestLayout from '../layouts/GuestLayout.vue'

import ToDo from '../pages/ToDo/Index.vue';
// import About from '../pages/ToDo/About'
import Create from '../pages/ToDo/Create.vue'
import Edit from '../pages/ToDo/Edit.vue'
import Show from '../pages/ToDo/Show.vue'
import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Register from '../pages/Register.vue'

function auth(to,from,next){
    if(localStorage.getItem('token')){
        next()
        return
    }
    next('/login')
    return
}

const routes = [
    {
        redirect: {name: 'home'},
        component: GuestLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: {title:'Home'},
            },
            {
                path: '/login',
                name: 'login',
                component: Login,
                meta: {title:'Login'},
            },
            {
                path: '/register',
                name: 'register',
                component: Register,
                meta: {title:'Register'},
            },
        ]
    },
    {
        component: AuthLayout,
        beforeEnter: auth,
        children: [
            {
                path: '/todo',
                name: 'todo',
                component: ToDo,
                meta: {title:'Todo List'},
            },
            {
                path: '/todo/create',
                name: 'todo.create',
                component: Create,
                meta: {title:'Create Todo'},
            },
            {
                path: '/todo/edit/:id',
                name: 'todo.edit',
                component: Edit,
                meta: {title:'Edit todo'},
            },
            {
                path: '/todo/show/:id',
                name: 'todo.show',
                component: Show,
                meta: {title:'Show Todo'},
            }
        ]
    },

];

export default createRouter({
    history: createWebHistory(),
    routes
})