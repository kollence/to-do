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
                <small class="pt-2">welcome: {{ getUser.name }}</small>
                <div class="">
                    <form @submit.prevent="logout()" class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex pt-10">
                        <button type="submit" class="btn btn-link">
                            <!-- <div v-show="store.isUserLoading" class="inline-block animate-spin w-4 h-4 mr-2 border-t-2 border-t-white border-r-2 border-r-white border-b-2 border-b-white border-l-2 border-l-blue-600 rounded-full"></div>
                                <span v-if="store.isUserLoading">Processing...</span>
                                <span v-else>Logout</span> -->
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
            return this.$store.getters['auth/getUser'];
        },
    },
};
</script>