<template>
  <!-- User Information -->
  <section class="bg-gray-300" v-if="sectionNumber === 1">
    <div class="text-center space-y-4">
      <div class="max-w-md mx-auto my-8 bg-white p-6 rounded-md">
        <h1 class="text-2xl font-bold mb-4">User Information Form</h1>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="first-name">First Name:</label>
          <input :disabled="disableInput"
            class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" id="first-name" name="first-name" placeholder="Enter your first name" required
            v-model.trim="firstName">
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="last-name">Last Name:</label>
          <input :disabled="disableInput"
            class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" id="last-name" name="last-name" placeholder="Enter your last name" required
            v-model.trim="lastName">
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="email">Email:</label>
          <input :disabled="disableInput"
            class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email" id="email" name="email" placeholder="Enter your email address" required v-model.trim="email">
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="age">Age:</label>
          <input :disabled="disableInput"
            class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number" id="age" name="age" min="1" placeholder="Enter your age" required v-model.trim="userAge">
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="nationality">Nationality:</label>
          <input :disabled="disableInput"
            class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" id="nationality" name="nationality" placeholder="Enter your nationality" required
            v-model.trim="nationality">
        </div>
        <div>
          <label class="block text-gray-700 font-bold mb-2" for="phone">Phone Number:</label>
          <input :disabled="disableInput"
            class="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel" id="phone" name="phone" placeholder="Enter your phone number" required v-model.trim="phone">
        </div>
        <button class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-200 mt-5"
          @click.prevent="validateForm()" v-if="isValid === false">Submit</button>
        <div>
          <button class="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-200 mt-5"
            @click="nextPage()" v-if="isValid === true">Next</button>
        </div>
      </div>

    </div>
  </section>

  <!-- Select Quiz -->
  <div v-if="sectionNumber === 2">
    <div class="bg-gray-100 h-screen flex justify-center items-center">
      <div class="max-w-lg w-full bg-white rounded-lg shadow-lg p-4">
        <h2 class="text-2xl font-bold mb-4">Select a Quiz</h2>
        <div class="flex flex-wrap justify-between">
          <div class="w-full mb-4" @click="loadQuestion1()">
            <div
              class="bg-gray-800 rounded-lg p-4 text-white cursor-pointer hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg font-bold mb-2">Osteology of the Lower Limbs</h3>
              <!-- <p class="text-sm">Test your knowledge of world history.</p> -->
            </div>
          </div>
          <div class="w-full mb-4" @click="loadQuestion2()">
            <div
              class="bg-blue-600 rounded-lg p-4 text-white cursor-pointer hover:bg-blue-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg font-bold mb-2">Musculature and Innervation of the lower limbs</h3>
              <!-- <p class="text-sm">Challenge yourself with some math problems.</p> -->
            </div>
          </div>
          <div class="w-full mb-4" @click="loadQuestion3()">
            <div
              class="bg-purple-600 rounded-lg p-4 text-white cursor-pointer hover:bg-purple-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg font-bold mb-2">Osteology of the Upper Limbs</h3>
              <!-- <p class="text-sm">Test your knowledge of world geography.</p> -->
            </div>
          </div>
          <div class="w-full mb-4" @click="loadQuestion4()">
            <div
              class="bg-green-600 rounded-lg p-4 text-white cursor-pointer hover:bg-green-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 class="text-lg font-bold mb-2">Innervation and Musculature of the Upper Limbs</h3>
              <!-- <p class="text-sm">Test your knowledge of science and technology.</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Quiz Section -->
  <section v-if="sectionNumber === 3">
    <section class="w-full flex flex-wrap justify-center mt-6">
      <div class="flex justify-center w-full md:w-auto md:mx-auto">
        <h1 class="text-2xl text-blue-600 font-semibold mx-4 md:mx-12">
          Attempted Questions: {{ answeredQuestions.length }}
        </h1>
        <h1 class="text-2xl text-yellow-400 font-semibold mx-4 md:mx-12">
          Unattempted Questions : {{ questions.length - answeredQuestions.length }}
        </h1>
        <h1 class="text-2xl text-green-600 font-semibold mx-4 md:mx-12">
          Score: {{ score }}/{{ questions.length }}
        </h1>
      </div>
    </section>

    <section class="w-full flex justify-center my-5">
      <div class="w-full md:w-5/6 lg:w-3/4 xl:w-1/2">
        <div class="border-double border-4 rounded-md">
          <div>
            <h1 class="text-center text-2xl font-medium py-4" v-html="marked(question.question)"></h1>
          </div>
          <div class="my-8">
            <button class="border-double border-4 justify-center my-2 mx-4 px-2 py-1 w-full"
              v-for="option, index in options" @click="selectOption(option)" :key="option" v-html="marked(option)"
              :class="checkOption(option)">
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center">
      <div class="w-full md:w-5/6 lg:w-3/4 xl:w-1/2">
        <div class="flex justify-center my-8">
          <button
            class="bg-blue-700 mx-2 px-2 py-1 text-white transition duration-500 ease-in-out hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110 ..."
            @click="checkAnswer()" :disabled="disableSubmit"
            :class="selectedOption === '' ? 'cursor-not-allowed' : ''">Submit</button>
          <button
            class="bg-green-700 mx-2 px-2 py-1 text-white transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 ..."
            :disabled="disableNext" @click="nextQuestion()">Next</button>
        </div>
        <div class="flex justify-center my-8" v-if="answeredQuestions.length === questions.length">
          <button
            class="bg-green-700 mx-2 px-2 py-1 text-white transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110 ..."
            @click="nextPage()">Click here to view your Result Sheet</button>
        </div>
      </div>
    </section>

    <section class="w-full flex justify-center mt-8">
      <div class="w-full md:w-5/6 lg:w-3/4 xl:w-1/2">
        <div class="grid grid-cols-6 md:grid-cols-12 gap-1">
          <button v-for="quiz, index in questions" :key="index" class="px-4 md:px-8 border rounded shadow h-8 md:h-10"
            :class="questionButton(index)" @click="pickQuestion(index)">{{ index + 1 }}</button>
        </div>
      </div>
    </section>
  </section>

  <!-- Result Sheet -->
  <section v-if="sectionNumber === 4">
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">Quiz Result</h2>
          <p class="text-gray-600 text-sm">Thank you for taking the quiz!</p>
        </div>
        <div class="bg-gray-100 px-6 py-4 border-t border-gray-200">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm font-medium text-gray-600">Name</p>
              <p class="text-lg font-bold text-gray-800">{{ firstName }} {{ lastName }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-600">Age</p>
              <p class="text-lg font-bold text-gray-800">{{ userAge }} years</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-600">Phone</p>
              <p class="text-lg font-bold text-gray-800">{{ phone }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-600">Email</p>
              <p class="text-lg font-bold text-gray-800">{{ email }}</p>
            </div>
          </div>
          <div class="mt-8">
            <div class="text-2xl font-medium text-gray-600">{{ score }}/{{ questions.length }}</div>
            <div class="flex items-center justify-between">
              <div class="h-2 w-full bg-gray-200 rounded-full">
                <div class="text-center text-xs text-white bg-green-500 rounded-full"
                  :style="'width: ' + (score * (100 / questions.length)) + '%'">{{ parseInt(score *
                    (100 / questions.length)) }}%</div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import questionBank from '../views/anatomy.json';
import { ref } from 'vue';
import { marked } from "marked";
// import questionBank from '../views/quiz.json'
export default {

  setup() {
    let firstName = ref();
    let lastName = ref();
    let email = ref();
    let nationality = ref();
    let phone = ref();
    let userAge = ref();
    let isValid = ref(false);
    let sectionNumber = ref(1);
    // const questions = shuffleArray(questionBank.results);
    let questionsLLO = ref(shuffleArray(questionBank.lowerLimbOsteology));
    let questionsLLS = ref(shuffleArray(questionBank.lowerLimbSupply));
    let questionsULO = ref(shuffleArray(questionBank.upperLimbOsteology));
    let questionsULS = ref(shuffleArray(questionBank.upperLimbSupply));
    let questions = ref([...questionsLLS.value, ...questionsLLO.value]);
    // console.log(questions);
    let selectedOption = ref("");
    let checkList = ref(0);
    let disableInput = ref(false);
    // let selectedOption;
    // let selectAnswer = ref(true);
    // let verifyAnswer = false;
    let disableNext = ref(true);
    let disableOptions = ref(false);
    let disableSubmit = ref(true);
    let score = ref(0);
    let questionIndex = ref(0);
    let question = ref(questions.value[questionIndex.value]);
    let correctAnswer = ref(question.value.answer);
    // let incorrectAnswers = ref(question.value.incorrect_answers);
    // let rawOptions = ref([...incorrectAnswers.value, correctAnswer.value]);
    let options = ref(shuffleArray(question.value.options));
    let answeredQuestions = ref([]);
    // let unAnsweredQuestions = ref([]);
    let awardedQuestions = ref([]);
    let unawardedQuestions = ref([]);
    let selectedQuestion = ref();
    // let showResultButton = ref(false);

    function loadQuestion1() {
      questions.value = questionsLLO.value;
      sectionNumber.value = 3;
    };

    function loadQuestion2() {
      questions.value = questionsLLS.value;
      sectionNumber.value = 3;
    };

    function loadQuestion3() {
      questions.value = questionsULO.value;
      sectionNumber.value = 3;
    };

    function loadQuestion4() {
      questions.value = questionsULS.value;
      sectionNumber.value = 3;
    };

    function validateForm() {
      const firstNameInput = document.getElementById("first-name");
      const lastNameInput = document.getElementById("last-name");
      const emailInput = document.getElementById("email");
      const ageInput = document.getElementById("age");
      const nationalityInput = document.getElementById("nationality");
      const phoneInput = document.getElementById("phone");

      // Validate first name
      if (firstNameInput.value.trim() === "") {
        firstNameInput.classList.add("border-red-500");
        isValid.value = false;
      } else {
        firstNameInput.classList.remove("border-red-500");
        firstNameInput.classList.add("border-green-500");
        checkList.value++
      }

      // Validate last name
      if (lastNameInput.value.trim() === "") {
        lastNameInput.classList.add("border-red-500");
        isValid.value = false;
      } else {
        lastNameInput.classList.remove("border-red-500");
        checkList.value++
        lastNameInput.classList.add("border-green-500");
      }

      // Validate email
      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.classList.add("border-red-500");
        isValid.value = false;
      } else {
        emailInput.classList.remove("border-red-500");
        emailInput.classList.add("border-green-500");
        checkList.value++
      }

      // Validate age
      if (isNaN(ageInput.value) || ageInput.value < 6 || ageInput.value > 120) {
        ageInput.classList.add("border-red-500");
        isValid.value = false;
      } else {
        ageInput.classList.remove("border-red-500");
        ageInput.classList.add("border-green-500");
        checkList.value++
      }

      // Validate nationality
      if (nationalityInput.value.trim() === "") {
        nationalityInput.classList.add("border-red-500");
        isValid.value = false;
      } else {
        nationalityInput.classList.remove("border-red-500");
        nationalityInput.classList.add("border-green-500");
        checkList.value++
      }

      // Validate phone number
      if (!/^[0-9]{11}$/.test(phoneInput.value)) {
        phoneInput.classList.add("border-red-500");
        isValid.value = false;
      } else {
        phoneInput.classList.remove("border-red-500");
        phoneInput.classList.add("border-green-500");
        checkList.value++
      }
      console.log(checkList.value);
      if (checkList.value === 6) {
        isValid.value = true;
        disableInput.value = true;
      } else if (checkList.value < 6) {
        checkList.value = 0;
      }
      // return isValid;
    };

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      };
      return array
    };

    function selectOption(option) {
      selectedOption.value = option;
      disableSubmit.value = false;
      console.log(option)
    };

    function checkOption(option) {
      if (disableOptions.value === false) {
        return option === selectedOption.value ? 'text-blue-600 font-semibold  bg-gray-300' : 'bg-gray-300';
      }
      else {
        if (selectedOption.value === correctAnswer.value) {
          return option === correctAnswer.value ? 'text-white-600 font-semibold bg-green-500 animate-pulse' : 'bg-gray-300'
        } else if (selectedOption.value !== correctAnswer.value || selectedOption.value === '') {
          return option === correctAnswer.value ? 'text-white-600 font-semibold bg-green-500 animate-pulse' : option === selectedOption.value ? 'text-white-600 font-semibold bg-red-500 animate-pulse' : 'bg-gray-300'
        }
      }

    }

    function checkAnswer() {
      // selectAnswer.value = false;
      disableOptions.value = true;
      disableNext.value = false;
      disableSubmit.value = true;
      answeredQuestions.value.push(questionIndex.value);
      if (selectedOption.value === correctAnswer.value) {
        console.log('correct!')
        score.value = score.value + 1;
        awardedQuestions.value.push(questionIndex.value)
      } else {
        score.value = score.value + 0;
        unawardedQuestions.value.push(questionIndex.value)
      }

    }


    function nextQuestion() {
      if (questionIndex.value <= questions.value.length - 1) {
        questionIndex.value++;
        if (answeredQuestions.value.includes(questionIndex.value)) {
          disableOptions.value = true;
          disableNext.value = false;
          disableSubmit.value = true;
          selectedOption.value = '';
          question.value = questions.value[questionIndex.value];
          correctAnswer.value = question.value.correct_answer;
          correctAnswer = ref(question.value.answer);
          options = ref(shuffleArray(question.value.options));
          // incorrectAnswers.value = question.value.incorrect_answers;
          // rawOptions.value = [...incorrectAnswers.value, correctAnswer.value];
          // options.value = shuffleArray(rawOptions.value);
          alert('You have already answered this question. Please kindly choose another question');
        } else {
          selectedQuestion.value = questionIndex.value;
          disableOptions.value = false;
          disableNext.value = true;
          disableSubmit.value = true;
          selectedOption.value = '';
          question.value = questions.value[questionIndex.value];
          correctAnswer.value = question.value.correct_answer;
          correctAnswer.value = question.value.answer;
          options.value = shuffleArray(question.value.options);
          // incorrectAnswers.value = question.value.incorrect_answers;
          // rawOptions.value = [...incorrectAnswers.value, correctAnswer.value];
          // options.value = shuffleArray(rawOptions.value);
        }
      } else {

      }
    }

    function questionButton(index) {
      return awardedQuestions.value.includes(index) ? 'bg-green-600 cursor-not-allowed' : unawardedQuestions.value.includes(index) ? 'bg-red-600 cursor-not-allowed' : index === selectedQuestion.value ? 'bg-blue-600' : 'cursor-pointer transition duration-500 ease-in-out hover:bg-blue-500 transform hover:-translate-y-1 hover:scale-110 ...'
    }

    function pickQuestion(index) {
      if (awardedQuestions.value.includes(index)) {
        alert('You have already answered this question. Please kindly choose another question')
      } else {
        selectedQuestion.value = index;
        questionIndex.value = parseInt(index);
        disableOptions.value = false;
        disableNext.value = true;
        disableSubmit.value = true;
        selectedOption.value = '';
        question.value = questions.value[questionIndex.value];
        correctAnswer.value = question.value.correct_answer;
        correctAnswer.value = question.value.answer
        options.value = shuffleArray(question.value.options);
        // incorrectAnswers.value = question.value.incorrect_answers;
        // rawOptions.value = [...incorrectAnswers.value, correctAnswer.value];
        // options.value = shuffleArray(rawOptions.value);
      }
    }

    function nextPage() {
      sectionNumber.value++;
    }

    return {
      questionsLLO, questionsLLS, questions, score, questionIndex, question, marked, correctAnswer, options, selectedOption, disableOptions, disableSubmit, disableNext, answeredQuestions, awardedQuestions, unawardedQuestions, selectedQuestion, sectionNumber, firstName, lastName, userAge, phone, email, nationality, isValid, disableInput, checkList, shuffleArray, selectOption, checkAnswer, nextQuestion, checkOption, questionButton, pickQuestion, validateForm, nextPage, loadQuestion1, loadQuestion2, loadQuestion3, loadQuestion4
    }
  },
}
</script>


<style>.transform {
  transition-property: transform;
  transition-timing-function: ease-out;
}</style>
