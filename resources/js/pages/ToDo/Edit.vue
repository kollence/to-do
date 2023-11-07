<template>
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">Edit TODO</div>
                <div class="card-body">
                    <form @submit.prevent="updateTodo">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" id="title" v-model="form.title" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label for="desc">Description</label>
                            <textarea v-model="form.description" class="form-control" id="desc"
                                placeholder="Todo Description"></textarea>
                        </div>
                        <br>
                        <div class="row justify-content-between">
                            <div class="col-3">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            <div class="col-3">
                                <router-link class="btn btn-secondary" :to="{ name: 'todos' }">Cancel</router-link>
                            </div>
                        </div>
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
            form: {
                title: '',
                description: '',
                completed: null
            }
        }
    },
    created() {
        const id = this.$route.params.id

        this.fetchTodo(id)
    },
    methods: {
        async updateTodo() {
            try {
                await this.$store.dispatch('todo/updateTodo', this.form);

                this.$swal.fire({
                    title: 'Todo Updated!',
                    text: 'Your todo has been updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } catch (error) {
                console.error('Error updating todo:', error);

                this.$swal.fire({
                    title: 'Error',
                    text: 'An error occurred while updating the todo.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        },
        async fetchTodo(id) {
            try {
                const response = await axios.get(`/api/todos/${id}`)
                this.form = response.data.data
            } catch (error) {
                console.error("Error fetching todo: ", error);
            }
        },
    },
};
</script>