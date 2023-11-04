<template>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form @submit.prevent="registerUser">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    class="form-control"
                    required
                  />
                </div>
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
                <div class="form-group">
                  <label for="password_confirmation">Confirm Password</label>
                  <input
                    type="password"
                    id="password_confirmation"
                    v-model="formData.password_confirmation"
                    class="form-control"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
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
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
      };
    },
    methods: {
      async registerUser() {
        // Call the Vuex action for registration
        this.$store.dispatch('auth/register', this.formData).then(path => {
            this.$router.push(path)
        });
      },
    },
  };
  </script>