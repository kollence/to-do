<template>
    <div>
        <ul class="no-bollets p-0 m-0">
            <li v-for="todo in todos" :key="todo.id" class="row pt-1 my-1 rounded justify-content-between py-2 overflow-hidden" :class="{'completed-todo': todo.completed, 'not-completed-todo': !todo.completed}">
                <div class="col  text-dark">
                    <router-link class="text-dark" :to="{ name: 'todo.show', params: { id: todo.id } }">{{ todo.title }}</router-link>
                </div>
                <div class="col-3 mr-auto  text-dark">
                    <button @click="toggleCompletion(todo)" :class="{'not-completed-todo': todo.completed, 'completed-todo': !todo.completed}" class="btn btn-sm btn-success p-1 text-warning">{{ todo.completed ? '&#x2714;' : '&#x2716;' }}</button>
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

.completed-todo {
    background-color: green;
  }

  .not-completed-todo {
    background-color: rgb(180, 180, 180);
  }
</style>