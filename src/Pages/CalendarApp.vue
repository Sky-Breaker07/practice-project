<template>
    <div class="m-auto">
        <h1 class="text-3xl text-center my-2 font-extrabold">Vue Calendar</h1>
        <h1 class="text-3xl text-center my-2 font-extrabold"></h1>

    </div>

    <section class="m-2 flex justify-center text-2xl">
        <h2 class="font-bold ">{{ currentMonthName }}</h2>
        <h2 class="font-bold mx-2">{{ currentYear }}</h2>
    </section>
    <section class="flex">
        <p v-for="day in days" :key="day" class="font-bold p-2 text-2xl text-center my-2" style="width: 14.28%;">{{ day }}
        </p>
    </section>
    <section class="flex flex-wrap">
        <p v-for="num in startDay()" :key="num" class="p-2 text-center" style="width: 14.28%;"></p>
        <p v-for="num in daysInMonth(currentYear, currentMonth)" :key="num" class="p-2 text-center" style="width: 14.28%;"
            :class="currentDayClass(num)">
            {{ num }}</p>
    </section>
    <section class="flex justify-between my-4">
        <button class="px-5 border rounded" @click="prevMonth()">Prev</button>
        <button class="px-5 border rounded" @click="nextMonth()">Next</button>
    </section>
</template>

<script>
export default {
    name: 'CalendarApp',
    data() {
        return {
            currentDay: new Date().getUTCDate(),
            currentMonth: new Date().getMonth() + 1,
            currentMonthName: new Date().toLocaleString("default", { month: "long" }),
            currentYear: new Date().getFullYear(),
            days: [
                'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            ]
        }
    },
    methods: {
        daysInMonth(year, month) {
            return new Date(2022, month, 0).getDate();
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonth - 1).getDay()
        },
        nextMonth() {
            if (this.currentMonth < 12) {
                this.currentMonth += 1;
                let newDate = new Date(`${this.currentYear}-${this.currentMonth}-3`);
                this.currentMonthName = newDate.toLocaleString("default", { month: "long" });
            }
            else {
                this.currentMonth = 1;
                this.currentYear = Number(this.currentYear) + 1;
                let newDate = new Date(`${this.currentYear}-${this.currentMonth}-3`);
                this.currentMonthName = newDate.toLocaleString("default", { month: "long" });
            }

        },
        prevMonth() {
            if (this.currentMonth > 1) {
                this.currentMonth -= 1;
                let newDate = new Date(`${this.currentYear}-${this.currentMonth}-3`);
                this.currentMonthName = newDate.toLocaleString("default", { month: "long" });
            }
            else {
                this.currentMonth = 12;
                this.currentYear = Number(this.currentYear) - 1;
                let newDate = new Date(`${this.currentYear}-${this.currentMonth}-3`);
                this.currentMonthName = newDate.toLocaleString("default", { month: "long" });
            }

        },
        currentDayClass(num) {
            const calendarFullDate = new Date(`${this.currentYear}-${this.currentMonth}-${num}`).toDateString();
            const currentFullDate = new Date().toDateString();
            return calendarFullDate === currentFullDate ? "text-yellow-700 font-bold" : "";

        }
    }

}
</script>

<style></style>