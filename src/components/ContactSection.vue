<template>
    <section class="contact" id="contact" ref="contact">
      <h2>Contact Me</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name...">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email...">
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your message..."></textarea>
        <button>Send</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
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
        const contactPosition = this.$refs.contact.offsetTop
        const contactHeight = this.$refs.contact.offsetHeight
        const contactBottom = contactPosition + contactHeight
        const windowHeight = window.innerHeight
        const windowBottom = scrollPosition + windowHeight
  
        if (windowBottom > contactBottom) {
          this.scrolled = true
        } else {
          this.scrolled = false
        }
      }
    }
  }
  </script>
   

<style scoped>
.contact {
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
}

.contact--slide {
  transform: translateX(0%);
}
</style>