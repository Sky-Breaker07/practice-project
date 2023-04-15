<template>
    <div class="flex flex-wrap w-full relative">
        <div v-for="color, index in sliders" :key="color" class="w-full absolute">
            <transition name="fade">
                <div v-if="currentSlide === index" :class="color" style="height: 350px;">
                    <h1 class="text-center text-3xl font-semibold"> Slider/Carousel {{ currentSlide + 1 }} </h1>
                </div>
            </transition>
        </div>
    </div>
    <!-- <div class="my-10 flex w-full">
        <div class="m-auto">
            <transition name="fade">
                <h1 v-if="isTitleShowing" class="text-2xl font-semibold"> Slider/Carousel</h1>
            </transition>
            <button class="text-1xl font-semibold px-2 rounded border" @click="isTitleShowing = !isTitleShowing">Toggle
                Text</button>
        </div>
    </div> -->
    <div class="w-full mt-80" style="height: 400px;">
        <div class="absolute w-full flex justify-center">
            <div v-for="slider, index in sliders" :key="slider"
                :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
                class="w-4 h-4 rounded-full mx-3 cursor-pointer shadow-md" @click="makeActive(index)">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSlide: 0,
            interval: "",
            sliders: [
                'bg-blue-600',
                'bg-yellow-600',
                'bg-teal-600',
                'bg-green-600',
                'bg-pink-600',
            ],
            isTitleShowing: true,
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide++
            if (this.currentSlide > (this.sliders.length - 1)) {
                this.currentSlide = 0
            }
        }, 3500);
    },
    beforeUnmount() {
        clearInterval(this.interval)
    },
    methods: {
        makeActive(index) {
            clearInterval(this.interval)
            this.currentSlide = index;
            this.interval = setInterval(() => {
                this.currentSlide++
                if (this.currentSlide > (this.sliders.length - 1)) {
                    this.currentSlide = 0
                }
            }, 3500);
        },
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
}


.fade-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>