<template>
    <nav  class="row justify-content-center ">
        <div  class="col-md-6 mt-2">
            <div v-if="isAuthenticated" class="d-flex justify-content-between">
                <div class="">
                    <router-link :to="{ name: 'todo' }" class="btn btn-link">
                        List
                    </router-link>
                    <router-link :to="{ name: 'todo.create' }" class="btn btn-link">
                        Create
                    </router-link>
                </div>
                <small class="pt-2">welcome: {{ getUser }}</small>
                <div class="">
                    <form @submit.prevent="logout()" class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex pt-10">
                        <button type="submit" class="btn btn-link">
                            Logout
                        </button>
                    </form>
                </div>
            </div>
            <div  v-if="!isAuthenticated" class="d-flex justify-content-between">
                <div class="">
                    <router-link :to="{ name: 'home' }" class="btn btn-link">
                        home
                    </router-link>
                </div>
                <div class="">
                    <router-link :to="{ name: 'login' }" class="btn btn-link">
                        Login
                    </router-link>
                    <router-link :to="{ name: 'register' }" class="btn btn-link">
                        Register
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch("auth/logout").then(path => {
                this.$router.push(path)
            })
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated'];
        },
        getUser() {
            return this.$store.state.auth.user.user.name;
        },
    },
};
</script>