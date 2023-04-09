<template>
    <section class="about" id="about" ref="about">
      <h2>About Me</h2>
      <p>Hi, I'm Oyebola Feranmi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tellus quis tellus tristique, vitae facilisis quam eleifend. Donec et massa quis lacus blandit luctus. Fusce vel fermentum augue, at varius tellus. Suspendisse potenti. Nullam euismod nisi in felis interdum, non rhoncus elit dignissim. Donec eu dolor sit amet ex posuere malesuada.</p>
      <ul>
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>UI/UX Design</li>
      </ul>
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
        const windowHeight = window.innerHeight
        const windowBottom = scrollPosition + windowHeight
  
        if (windowBottom > aboutPosition) {
          this.scrolled = true
        } else {
          this.scrolled = false
        }
      }
    }
  }
  </script>
  
<style>
.about {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.about--fade {
    opacity: 1;
}
</style>