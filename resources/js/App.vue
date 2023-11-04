<template>
    <div class="container">

        <div class="row justify-content-center">
            <h3 class="text-center">{{ message }}</h3>
            <nav-component></nav-component>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Nav from "./components/Nav.vue"; // Import the Nav.vue component
export default {
    components: {
        "nav-component": Nav, // Register the Nav.vue component as "nav-component"
    },
    data() {
        return {
            message: "ToDo App"
        }
    }
}
</script>
  