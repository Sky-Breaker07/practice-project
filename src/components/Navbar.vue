<template>
    <nav :class="{ 'navbar--scroll': scrolled }">
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            scrolled: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
            this.scrolled = scrollPosition > 0
        }
    }
}
</script>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    transition: background-color 0.5s ease-in-out;
}

.navbar--scroll {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
  