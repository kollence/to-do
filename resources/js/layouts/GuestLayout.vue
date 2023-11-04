<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6 border">
                <div class="alert" role="alert">
                    {{ message }}
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "Guest Layout"
        }
    }
}
</script>