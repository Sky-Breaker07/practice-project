<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 text-2xl">
       <router-link v-for="item in list" :key="item.to" :to="item.to" class="mx-3"> {{ item.title }}</router-link>
       <button class="mx-3 border-white" @click="$emit('open-login-modal')">Login</button>
    </nav>
    
</template>

<script lang="js">
    export default {
        name: 'AppHeader',
        emits: ["open-login-modal"],
        data() {
            return {
                list: [
                    { title: "Home", to: "/"},
                    { title: "Dc Heroes", to: "/DcHeroes"},
                    { title: "Calendar", to: "/CalendarApp"},
                    { title: "Markdown", to: "/Markdown"},
                    { title: "Slider/Carousel", to: "/Slider"},
                    { title: "Calculator", to: "/Calculator"},
                    { title: "Modal", to: "/Modal"},
                    { title: "Quiz", to: "/Quiz"},
                    { title: "CGPA", to: "/CGPA"},
                ]
            }
        }
    }
</script>

<style>

</style>