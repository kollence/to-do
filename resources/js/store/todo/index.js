const state = {
    todos: [], // Store your todos here
    todo:[]
};

const mutations = {
    SET_TODOS: (state, todos) => (state.todos = todos),
    ADD_TODO: (state, newTodo) => state.todos.unshift(newTodo),
    UPDATE_TODO: (state, updatedTodo) => {
        const index = state.todos.findIndex(
            (todo) => todo.id === updatedTodo.id
        );
        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    },
    REMOVE_TODO: (state, todoId) =>(state.todos = state.todos.filter((todo) => todo.id !== todoId)),
    UPDATE_TODO_COMPLETION(state, updatedTodo) {
        // Find the todo with the same ID and update its completion status
        const todoIndex = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (todoIndex !== -1) {
          state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
        }
    },
};

const getters = {
    allTodos: (state) => state.todos,
    // getTodoById: (state) => (id) => {
    //     return state.todos.find((todo) => todo.id === id);
    // },
    getTodo: (state) => state.todo
};

const actions = {
    async fetchTodos({ commit }) {
        try {
            const response = await axios.get("/api/todos"); // Replace with your API endpoint
            commit("SET_TODOS", response.data.data);
        } catch (error) {
            console.error("Error fetching todos: ", error);
        }
    },
    async fetchTodo({ commit }, id) {
        try {
            const response = await axios.get(`/api/todos/${id}`)
            // commit("setTodo", response.data.data);
            return response.data.data
        } catch (error) {
            console.error("Error fetching todo: ", error);
        }
    },
    async createTodo({ commit }, newTodo) {
        // console.log(newTodo);
        try {
            const response = await axios.post("/api/todos", newTodo); // Replace with your API endpoint
            commit("ADD_TODO", response.data.data);
        } catch (error) {
            console.error("Error creating todo: ", error);
        }
    },
    async updateTodo({ commit }, updatedTodo) {
        const edited = {...updatedTodo};
        try {
            const response = await axios.put(
                `/api/todos/${edited.id}`,
                edited
            ); // Replace with your API endpoint
            commit("UPDATE_TODO", response.data.data);
        } catch (error) {
            console.error("Error updating todo: ", error);
        }
    },
    async deleteTodo({ commit }, todoId) {
        // console.log(todoId);
        try {
            await axios.delete(`/api/todos/${todoId}`); // Replace with your API endpoint
            commit("REMOVE_TODO", todoId);
        } catch (error) {
            console.error("Error deleting todo: ", error);
        }
    },
    async updateTodoCompletion({ commit }, todo) {
        try {
            const response = await axios.put(`/api/todos-completion/${todo.id}`, {
                completed: !todo.completed, // Toggle the completion status
            });
            commit('UPDATE_TODO_COMPLETION', todo);
            
        } catch (error) {
            // Handle error
            console.error('Error updating completion status:', error);
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
