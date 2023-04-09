<template>
    <section class="about" id="about" ref="about">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lacus ut felis blandit, at lobortis sapien
            egestas. Proin semper nibh non neque varius interdum.</p>
    </section>
</template>

  
<script>
export default {
    name: 'AboutSection',
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
            const aboutPosition = this.$refs.about.offsetTop
            const aboutHeight = this.$refs.about.offsetHeight
            const aboutBottom = aboutPosition + aboutHeight
            const windowHeight = window.innerHeight
            const windowBottom = scrollPosition + windowHeight

            if (windowBottom > aboutBottom) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }
    }
}
</script>


<style scoped>
.hero {
    height: 100vh;
    background-image: url('../images/00002.jpg');
    background-size: cover;
    background-position: center;
    animation: hero-background 30s infinite alternate;
}

@keyframes hero-background {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.about {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.about--fade {
    opacity: 1;
}
</style>