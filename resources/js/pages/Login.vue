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
                <span v-if="error" class="alert text-danger ml-5">{{ error }}!</span>
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
        error: null
      };
    },
    methods: {
      async loginUser() {
        // Call the Vuex action for login
        await this.$store.dispatch('auth/login', this.formData).then(path => {
            this.error = null
            this.$router.push(path)
        }).catch((errorMsg) => {
            this.error = errorMsg
        });
      },
    },
  };
  </script>
