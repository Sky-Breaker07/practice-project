<template>
    <section class="portfolio"></section>
</template>
<script>
export default {
    name: 'PortfolioSection',
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
            const portfolioPosition = this.$refs.portfolio.offsetTop
            const portfolioHeight = this.$refs.portfolio.offsetHeight
            const portfolioBottom = portfolioPosition + portfolioHeight
            const windowHeight = window.innerHeight
            const windowBottom = scrollPosition + windowHeight

            if (windowBottom > portfolioBottom) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }
    }
}
</script>
  

<style scoped>
.portfolio {
    background-color: #fff;
    transition: background-color 0.5s ease-in-out;
}

.portfolio--highlight {
    background-color: #f5f5f5;
}
</style>