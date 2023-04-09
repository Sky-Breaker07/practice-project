<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">CGPA Calculator</h1>
        <table class="w-full">
            <thead>
                <tr>
                    <th class="text-left">Course Code</th>
                    <th class="text-left">Score</th>
                    <th class="text-left">Units</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index">
                    <td><input v-model="row.courseCode" type="text" class="w-full rounded py-2 px-3 border"
                            placeholder="Course Code"></td>
                    <td><input v-model="row.score" type="number" step="0.01" min="0" max="100"
                            class="w-full rounded py-2 px-3 border" placeholder="Score"></td>
                    <td><input v-model="row.units" type="number" min="1" max="10" class="w-full rounded py-2 px-3 border"
                            placeholder="Units"></td>
                    <td><button @click="removeRow(index)"
                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <button @click="addRow" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Add
            Row</button>
        <div class="mt-4">
            <h2 class="text-xl font-bold mb-2">CGPA: {{ calculateCGPA() }}</h2>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CGPA',
    data() {
        return {
            rows: [
                {
                    courseCode: "",
                    score: "",
                    units: ""
                }
            ]
        };
    },
    methods: {
        addRow() {
            this.rows.push({
                courseCode: "",
                score: "",
                units: ""
            });
        },
        removeRow(index) {
            this.rows.splice(index, 1);
        },
        calculateCGPA() {
            let totalPoints = 0;
            let totalUnits = 0;
            this.rows.forEach(row => {
                if (row.courseCode !== "" && row.score !== "" && row.units !== "") {
                    const gradePoint = this.getGradePoint(row.score);
                    totalPoints += gradePoint * row.units;
                    totalUnits += Number(row.units);
                }
            });
            if (totalUnits === 0) {
                return 0;
            }
            return (totalPoints / totalUnits).toFixed(2);
        },
        getGradePoint(score) {
            if (score >= 70) {
                return 4;
            } else if (score >= 60) {
                return 3;
            } else if (score >= 50) {
                return 2;
            } else if (score >= 45) {
                return 1;
            } else {
                return 0;
            }
        }
    }
};
</script>
  

<style></style>