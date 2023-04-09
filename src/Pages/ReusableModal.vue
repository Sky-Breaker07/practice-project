<template>
    <section class="w-full flex flex-wrap">
        <div class="m-auto">
            <h1 class="text-2xl my-5 font-semibold w-full">Reusable Modal</h1>
            <ModalComponent v-if="isRedModalOpen" @close-login="isRedModalOpen = false">
                <h1 class="text-red-500 font-medium">Red Modal</h1>
            </ModalComponent>
            <button @click="isRedModalOpen = true" class="font-medium">Red Modal</button>
            <ModalComponent v-if="isBlueModalOpen" @close-login="isBlueModalOpen = false">
               
            </ModalComponent>
            <button @click="isBlueModalOpen = true" class="font-medium">Blue Modal</button>
        </div>

    </section>
</template>

<script>
import ModalComponent from '../components/Modal.vue';
import { ref } from 'vue';
export default {
    name: 'Modal',
    components: { ModalComponent },
    setup() {
        const isRedModalOpen = ref(false);
        const isBlueModalOpen = ref(false);
        return { isRedModalOpen, isBlueModalOpen };
    }
}
</script>

<style></style>