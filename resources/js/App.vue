<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="incrementCount">Increment</button>
      <button @click="decrementCount">Decrement</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  
  export default {
    computed: {
      ...mapState("counter", ["count"]), // "counter" is the module name, "count" is the state property
    },
    methods: {
      ...mapActions("counter", ["incrementCount", "decrementCount"]), // Actions from the "counter" module
    },
  };
  </script>
  
  
  
  
  