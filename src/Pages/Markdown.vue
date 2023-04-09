<template>
    <div class="flex flex-wrap w-full">
        <h1 class="w-full text-center text-4xl font-bold my-3">Markdown App</h1>
        <section class="flex w-10/12 m-auto h-screen">
            <article class="w-1/2 border">
                <textarea class="w-full h-full" :value="text" @input="update"></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100" v-html="markedTest">

            </article>
        </section>
    </div>
</template>

<script>
import { marked } from "marked";
import deBounce from '../Utilities/Mixins/deBounce.js';
export default {
    mixins: [deBounce],
    name: 'Markdown',
    data() {
        return {
            text: "",
             
        }
    },
    computed: {
        markedTest() {
            return marked(this.text)
        }
    },
    methods: {
        update(e) {
            const task = () => (this.text = e.target.value)
            this.deBounce(task, 500)
        },
    }
}
</script>

<style scoped></style>