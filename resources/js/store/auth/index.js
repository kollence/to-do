const state = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
};

const mutations = {
    SET_USER(state, data) {
        state.user = data;
        // localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data));
    },
    CLEAR_USER(state) {
        state.user = null;
        // localStorage.removeItem("token");
        localStorage.removeItem("user");
    },
};

const actions = {
    register({ commit }, userData) {
        return new Promise((resolve, reject) => {
            const createdCase = { ...userData };
            axios.post("/api/register", createdCase)
                .then((result) => {
                    commit("SET_USER", result.data.data);
                    resolve("todos");
                })
                .catch((e) => {
                    console.log(e);
                    reject("Registration failed");
                });
        });
    },

    login({ commit }, credentials) {
        return new Promise((resolve, reject) => {
            const createdCase = { ...credentials };
            axios.post("/api/login", createdCase)
                .then((result) => {
                    commit("SET_USER", result.data.data);
                    resolve("todos");
                })
                .catch((e) => {
                    console.log(e);
                    reject("login failed");
                });
        });
    },

    logout({ commit }) {
        return new Promise((resolve, reject) => {
            axios.post("/api/logout")
                .then((result) => {
                    commit("CLEAR_USER");
                    resolve("/");
                })
                .catch((e) => {
                    console.log(e);
                    reject("logout failed");
                });
        });
    },
};

const getters = {
    isAuthenticated: (state) => !!state.user,
    getUser: (state) => state.user,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
