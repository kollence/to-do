<template>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <form @submit.prevent="loginUser">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    v-model="formData.password"
                    class="form-control"
                    required
                  />
                </div>
                <br>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      async loginUser() {
        // Call the Vuex action for login
        await this.$store.dispatch('auth/login', this.formData).then(path => {
            this.$router.push(path)
        });
      },
    },
  };
  </script>
