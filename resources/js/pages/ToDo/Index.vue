<template>
    <div>
        <ul class="no-bollets p-0 m-0">
            <li v-for="todo in todos" :key="todo.id" class="row justify-content-between py-2 overflow-hidden">
                <div class="col"><router-link :to="{ name: 'todo.show', params: { id: todo.id } }">{{ todo.title
                }}</router-link></div>
                <div class="col-3 mr-auto">
                    <button @click="toggleCompletion(todo)" class="btn btn-sm btn-success p-1">{{ todo.completed ? 'Completed' : 'Complete' }}</button>
                </div>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    computed: {
        todos() {
            return this.$store.getters['todo/allTodos'];
        },
    },
    mounted() {
        this.$store.dispatch('todo/fetchTodos');
    },
    methods: {
        toggleCompletion(todo) {
            this.$store.dispatch('todo/updateTodoCompletion', todo);
        },
    }
};
</script>
<style>
ul.no-bullets {
    list-style-type: none;
    /* Remove bullets */
    padding: 0;
    /* Remove padding */
    margin: 0;
    /* Remove margins */
}

li {
    max-height: 39px;
}
</style>