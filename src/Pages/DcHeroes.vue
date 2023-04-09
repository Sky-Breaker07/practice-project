<template>
  <h1 class="text-center text-2xl">DC Heroes</h1>
  <div class="container">
    <div class="row justify-content-lg-center  flex" id="list-items" v-for="(hero, index) in dcHeroes" :key="hero.name">
      <div class="flex">
        <div class="text-start flex space-between"> {{ index + 1 }}. {{ hero.name }}
          <button id="remove-hero" @click="removeHero(index)">x</button>
        </div>
      </div> 
    </div>

  </div>
  <form class="text-center" @submit.prevent="addHero()">
    <input type="text" class="border rounded m-3" v-model.trim="newHero" placeholder="Type Hero Name here">
    <button type="submit" class="mx-10 border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" :disabled="isDisabled" :class="activateInput()">Add Hero</button>
  </form>
</template>
      
<script>
export default {
  name: 'DcHeroes',
  isDisabled: false,
  methods: {
    addHero() {
      if (this.newHero !== '') {
        this.dcHeroes.push({ name: this.newHero });
        this.newHero = '';
      }
    },
    removeHero(index) {
      this.dcHeroes = this.dcHeroes.filter((hero, i) => i !== index);
    },
    activateInput() {
      if (this.newHero.length < 1) {
        this.isDisabled = true
      } else {
        this.isDisabled = false
      }
    }
  },
  data() {

    return {
      isDisabled: false,
      newHero: '',
      dcHeroes: [
        { name: "Superman" },
        { name: "Supergirl" },
        { name: "Batman" },
        { name: "Flash" },
        { name: "Cyborg" },
        { name: "Wonder Woman" },
      ]
    }
  }
}
</script>
  
<style>
#list-items {
  margin-top: 2rem;
  margin-left: 20rem;
}

form {
  margin-top: 2rem;
}

#remove-hero {
  margin-left: 2rem;
}
</style>