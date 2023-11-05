<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h4>{{ todo.title }}</h4>
                <p>{{ todo.description }}</p>
                <p>{{ todo.created_at }}</p>
            </div>
            <div class="row justify-content-between">
                <router-link class="btn btn-sm btn-warning col-2"
                        :to="{ name: 'todo.edit', params: { id: todo.id } }">Edit</router-link> |
                    <button class="btn btn-sm btn-danger col-2" @click="confirmDelete(todo.id)">delete</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            todo:{
                id: this.$route.params.id,
                title:'',
                description:'',
                completed:false
            }
        }
    },
    created() {
        const id = this.$route.params.id

        this.fetchTodo(id)
    },
    methods:{
        async confirmDelete(id) {
            const result = await this.$swal.fire({
                title: 'Confirm Deletion',
                text: 'Are you sure you want to delete this item?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it',
                cancelButtonText: 'Cancel',
            });

            if (result.isConfirmed) {
                // The user confirmed the deletion, proceed with the delete action
                this.deleteItem(id); // Call the method to delete the item
            }
        },
        deleteItem(id) {
            this.$store.dispatch('todo/deleteTodo', id); 
                this.$swal.fire({
                    title: 'Todo Deleted!',
                    text: 'Your todo has been deleted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                this.$router.push('/todos')
        },
        async fetchTodo(id) {
            try {
                const response = await axios.get(`/api/todos/${id}`)
                this.todo = response.data.data
            } catch (error) {
                console.error("Error fetching todo: ", error);
            }
        },
    }
}
</script>