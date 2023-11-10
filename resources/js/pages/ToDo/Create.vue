<template>
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">Create New TODO</div>
                <div class="card-body">
                    <form @submit.prevent="createNewTodo">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" id="title" v-model="newTodo.title" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea v-model="newTodo.description" class="form-control" id="desc" required
                                placeholder="Todo Description"></textarea>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary">Submit</button>
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
            newTodo: {
                user_id: this.$store.state.auth.user.user.id,
                title: '',
                description: '',
            },
        };
    },
    methods: {
        async createNewTodo() {
            try {
                await this.$store.dispatch('todo/createTodo', this.newTodo)
                    .then((res) => {
                        if (res.hasOwnProperty('errors')) {
                            this.$swal.fire({
                                title: 'Error!',
                                text: res.errors,
                                icon: 'error',
                                confirmButtonText: 'Ok'
                            })
                        } else {
                            this.$router.push('/todos')
                            this.$swal.fire({
                                title: 'Todo Updated!',
                                text: res.success,
                                icon: 'success',
                                confirmButtonText: 'OK',
                            });
                            // Optionally, you can reset the form or redirect the user here
                            this.newTodo.title = '';
                            this.newTodo.description = '';
                        }
                    })

            } catch (error) {
                // Handle errors or show an error Swal notification if needed
                console.error('Error creating todo:', error);
                this.$swal.fire({
                    title: 'Error',
                    text: 'An error occurred while creating the todo.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        },
    },
};
</script>
  