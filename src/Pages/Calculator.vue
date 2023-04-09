<template>
    <section class="w-full flex">
        <div class="m-auto">
            <h1 class="text-4xl font-bold text-center">Calculator</h1>
            <p class="text-3xl text-right mt-10 mb-2 text-green-700 w-40 overflow-x-scroll h-15" style="direction: rtl;">{{
                currentNum }}</p>
            <small v-if="previousOperand">{{ prevNum }} {{ selectedOperand }} {{ currentNum }}</small>
            <div class="grid grid-cols-4 gap-1">
                <button @click="pressed('1')" class="p-2 w-15 font-semibold h-15  border rounded shadow"><p>1</p></button>
                <button @click="pressed('2')" class="p-2 w-15 font-semibold h-15  border rounded shadow">2</button>
                <button @click="pressed('3')" class="p-2 w-15 font-semibold h-15  border rounded shadow">3</button>
                <button @click="pressed('+')" class="p-2 w-15 font-semibold h-15  border rounded shadow">+</button>
                <button @click="pressed('4')" class="p-2 w-15 font-semibold h-15  border rounded shadow">4</button>
                <button @click="pressed('5')" class="p-2 w-15 font-semibold h-15  border rounded shadow">5</button>
                <button @click="pressed('6')" class="p-2 w-15 font-semibold h-15  border rounded shadow">6</button>
                <button @click="pressed('-')" class="p-2 w-15 font-semibold h-15  border rounded shadow">-</button>
                <button @click="pressed('7')" class="p-2 w-15 font-semibold h-15  border rounded shadow">7</button>
                <button @click="pressed('8')" class="p-2 w-15 font-semibold h-15  border rounded shadow">8</button>
                <button @click="pressed('9')" class="p-2 w-15 font-semibold h-15  border rounded shadow">9</button>
                <button @click="pressed('*')" class="p-2 w-15 font-semibold h-15  border rounded shadow">x</button>
                <button @click="pressed('c')" class="p-2 w-15 font-semibold h-15  border rounded shadow">C</button>
                <button @click="pressed('0')" class="p-2 h-15 font-semibold border rounded shadow">0</button>
                <button @click="pressed('=')" class="p-2 w-15 font-semibold h-15  border rounded shadow">=</button>
                <button @click="pressed('/')" class="p-2 w-15 font-semibold h-15  border rounded shadow">/</button>

            </div>
        </div>
    </section>
    <section class="w-full flex">

    </section>
</template>

<script>
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import { ref } from 'vue';
export default {
    name: "Calculator",
    setup() {
        const operations = ['+', '-', '/', '*'];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        const currentNum = ref("");
        const prevNum = ref("");
        const selectedOperand = ref("");
        const previousOperand = ref("");
        let operandClicks = 0;
        let pauseCalc = false;
        let finalSheet = false;

        function pressed(value) {
            // currentNum.value='';
            if (finalSheet === true) {
                clearScreen();
                pauseCalc = false;
                operandClicks = 0;
                // return;
            } else if (finalSheet === false) {
                // return;
            }
            if (value === '=' || value === 'Enter') {
                calculate(previousOperand.value);
                operandClicks = 0;
                pauseCalc = false;
                finalSheet = true;
                previousOperand.value = '';
                selectedOperand.value = '';
                prevNum.value = '';
            }
            else if (operations.includes(value)) applyOperation(value);
            else if (value === 'c') clearScreen();
            else if (numbers.includes(value)) {
                if (operandClicks <= 1) {
                    currentNum.value = currentNum.value + value;
                } else if (operandClicks > 1 && pauseCalc === false) {
                    prevNum.value = currentNum.value;
                    currentNum.value = '';
                    currentNum.value = currentNum.value + value;
                    pauseCalc = true;
                } else if (operandClicks > 1 && pauseCalc === true) {
                    currentNum.value = currentNum.value + value;
                }

            }
        };

        function applyOperation(value) {
            operandClicks++
            if (operandClicks === 1) {
                prevNum.value = currentNum.value;
                currentNum.value = '';
                selectedOperand.value = value;
                previousOperand.value = value;
            } else if (operandClicks > 1) {
                pauseCalc = false;
                selectedOperand.value = previousOperand.value;
                previousOperand.value = value;
                calculate(selectedOperand.value);

            }

        };

        function calculate(value) {
            if (value === '+') {
                currentNum.value = +prevNum.value + +currentNum.value
            }
            else if (value === '-') {
                currentNum.value = prevNum.value - currentNum.value
            }
            else if (value === '*') {
                currentNum.value = prevNum.value * currentNum.value
            }
            else if (value === '/') {
                currentNum.value = prevNum.value / currentNum.value
            }
            return currentNum.value
        };

        function clearScreen() {
            currentNum.value = '';
            operandClicks = 0;
            pauseCalc = false;
            finalSheet = false;
            previousOperand.value = '';
            selectedOperand.value = '';
        };

        function handleKeyUp(e) {
            pressed(e.key);
            console.log(e.key)
        };

        onMounted(() => {
            window.addEventListener('keyup', handleKeyUp)
        });

        onUnmounted(() => {
            window.removeEventListener('keyup', handleKeyUp)
        });

        return {
            currentNum, prevNum, operations, selectedOperand, operandClicks, pauseCalc, finalSheet, previousOperand, pressed, clearScreen, applyOperation, calculate, onMounted
        }
    }
}
</script>

<style></style>