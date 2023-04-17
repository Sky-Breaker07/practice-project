<!-- <template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 text-2xl">
       <router-link v-for="item in list" :key="item.to" :to="item.to" class="mx-3"> {{ item.title }}</router-link>
       <button class="mx-3 border-white" @click="$emit('open-login-modal')">Login</button>
    </nav>
    
</template> -->

<template>
  <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 text-2xl flex items-center justify-between relative">
    <div class="flex items-center">
      <router-link to="/" class="mx-3">Home</router-link>
      <button type="button" class="block sm:hidden ml-auto" @click="showMenu = !showMenu">
        <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div class="hidden sm:flex">
      <router-link v-for="item in list" :key="item.to" :to="item.to" class="mx-3" @click="showMenu = false">{{ item.title }}</router-link>
      <button class="mx-3 border-white" @click="$emit('open-login-modal')">Login</button>
    </div>
    <div class="sm:hidden absolute top-full left-0 right-0 z-50" :class="{'block': showMenu, 'hidden': !showMenu}">
      <div class="bg-blue-800 text-white py-2 px-3 rounded-b-lg">
        <router-link v-for="item in list" :key="item.to" :to="item.to" class="block py-2 px-4 rounded hover:bg-blue-700" @click="showMenu = false">{{ item.title }}</router-link>
        <button class="block py-2 px-4 rounded hover:bg-blue-700 border-white" @click="$emit('open-login-modal'); showMenu = false;">Login</button>
      </div>
    </div>
  </nav>
</template>

<script lang="js">
  export default {
      name: 'AppHeader',
      emits: ["open-login-modal"],
      data() {
          return {
              showMenu: false,
              list: [
                  // { title: "Home", to: "/"},
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

.fill-current {
  fill: currentColor;
}

</style>