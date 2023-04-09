<template>
    <section @click="$emit('close-login')" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50">
    </section>
    <div class="absolute inset-0">
        <div class="flex h-full ">
            <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
                <div class="p-2 border">
                    <h1 class="text-2xl text-center">Login</h1>
                    <form class="p-2 my-2" @submit.prevent="submitForm()">
                        <div class="my-4">
                            <label for="emailOrUsername">Email or Username</label>
                            <input v-model="form.email" class="rounded shadow w-full p-2" id="emailOrUsername" placeholder="Email or Username">
                        </div>
                        <div class="my-4">
                            <label for="userPassword">Password</label>
                            <input v-model="form.password" type="password" class="rounded shadow w-full p-2" id="userPassword"
                                placeholder="Password">
                        </div>
                        <div class="my-4">
                            <button type="submit" class="w-full rounded text-white p-2 shadow-md bg-gradient-to-r from-blue-600 to-sky-700">Login</button>
                        </div>
                        
                    </form>
                </div>
           </div>
        </div>
    </div>
</template>


<script>
export default {
    emits: ["close-login"],
    data() {
        return {
            form : {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        submitForm() {

        } 
    },
}
</script>

<style scoped></style>
