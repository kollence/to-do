const state = {
    count: 0, // Initial count value
};

const mutations = {
    INCREMENT_COUNT(state) {
        state.count++;
    },
    DECREMENT_COUNT(state) {
        state.count--;
    },
};

const actions = {
    incrementCount({ commit }) {
        commit("INCREMENT_COUNT");
    },
    decrementCount({ commit }) {
        commit("DECREMENT_COUNT");
    },
};

const getters = {
    getCount: (state) => state.count,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
