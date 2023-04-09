<template>
  <div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">

      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Welcome to my portfolio!
      </h2>
      <p class="mt-4 max-w-2xl text-xl text-gray-500">
        Here you can find some of my latest projects, learn more about me and my skills, and get in touch with me.
      </p>

      <div>
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      class="rounded-lg shadow-lg transform hover:scale-110 transition duration-500 ease-in-out"
      :class="[index % 2 === 0 ? 'ml-auto' : 'mr-auto']"
      :alt="image.alt"
    />
  </div>

      <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M13 7H7v6h6V7zm2-2v10H5V5h10zm-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Latest Project
                </dt>
                <dd class="flex items-baseline">
                  <div class="text-lg font-semibold text-gray-900">
                    Project Name
                  </div>

                  <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      New
                    </span>
                  </div>
                </dd>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M13 7H7v6h6V7zm2-2v10H5V5h10zm-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Latest Project
                </dt>
                <dd class="flex items-baseline">
                  <div class="text-lg font-semibold text-gray-900">
                    Project Name
                  </div>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      New
                    </span>
                  </div>
                </dd>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                View Project
              </a>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0 bg-blue-500 rounded-md p-3">
                <svg class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M13 7H7v6h6V7zm2-2v10H5V5h10zm-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-5 w-0 flex-1">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Latest Project
                </dt>
                <dd class="flex items-baseline">
                  <div class="text-lg font-semibold text-gray-900">
                    Project Name
                  </div>

                  <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      New
                    </span>
                  </div>
                </dd>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:px-6">
            <div class="text-sm">
              <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                View Project
              </a>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-16">
        <h3 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          About Me
        </h3>
        <div class="mt-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

          <div class="bg-white p-5 rounded-lg shadow">
            <div class="flex-shrink-0">
              <span class="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white-2z"
                clip-rule="evenodd"></span>
            </div>
            <div class="mt-4">
              <h4 class="text-lg font-medium text-gray-900">
                Experience
              </h4>
              <p class="mt-2 text-base text-gray-500 span" v-for="(phrase, index) in typingPhrases1" :key="index" :class="[index === typingIndex ? 'opacity-100' : 'opacity-0']">
                {{ typingEffect1 }}
              </p>
            </div>
          </div>
          <div class="bg-white p-5 rounded-lg shadow">
            <div class="flex-shrink-0">
              <span class="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </span>
            </div>
            <div class="mt-4">
              <h4 class="text-lg font-medium text-gray-900">
                Skills
              </h4>
              <p class="mt-2 font-bold text-2xl bg-blue-500 text-white text-center w-1/3 mx-auto span" v-for="(phrase, index) in typingPhrases2" :key="index" :class="[index === typingIndex ? 'opacity-100' : 'opacity-0']">
                {{ typingEffect2 }}
              </p>
            </div>
          </div>

          <div class="bg-white p-5 rounded-lg shadow">
            <div class="flex-shrink-0">
              <span class="inline-flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            </div>
            <div class="mt-4">
              <h4 class="text-lg font-medium text-gray-900">
                Education
              </h4>
              <p class="mt-2 text-base text-gray-500 span" v-for="(phrase, index) in typingPhrases3" :key="index" :class="[index === typingIndex ? 'opacity-100' : 'opacity-0']">
                {{ typingEffect3 }}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
import image1 from '../images/00002.jpg';
import image2 from '../images/00004.jpg';
import image3 from '../images/00002.jpg';
export default {
  data() {
    return {
      typingPhrases1: [
        "As a website developer, I have built 62 websites over 4 years",
        "I specialize in front-end with Vue.js, React, and Angular",
        "I work with clients from healthcare, finance, e-commerce, and education",
        " I keep up with the latest trends and create innovative websites",
        "Let's work together to bring your ideas to life",
      ],
      typingPhrases2: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJs",
        "VueJs",
        "Bootstrap",
        "Tailwind",
        "NodeJs",
        "MongoDB",
        "MySQL",
      ],
      typingPhrases3: [
        "Computer Science education: programming, algorithms, data structures, database management",
        "Online courses in front-end and back-end development, web design, and project management",
        "Team project experience: teamwork, communication, problem-solving skills",
        "Strong educational foundation for continued self-learning and industry experience",
      ],
      typingIndex: 0,
      images: [
        {
          src: image1,
          alt: 'Image 1',
        },
        {
          src: image2,
          alt: 'Image 2',
        },
        {
          src: image3,
          alt: 'Image 3',
        },
      ],
    };
  },
  computed: {
    typingEffect1() {
      return this.typingPhrases1[this.typingIndex];
    },
    typingEffect2() {
      return this.typingPhrases2[this.typingIndex];
    },
    typingEffect3() {
      return this.typingPhrases3[this.typingIndex];
    },
  },
  mounted() {
    setInterval(() => {
      this.typingIndex = (this.typingIndex + 1) % this.typingPhrases1.length;
    }, 3000);
    setInterval(() => {
      this.typingIndex = (this.typingIndex + 1) % this.typingPhrases2.length;
    }, 3000);
    setInterval(() => {
      this.typingIndex = (this.typingIndex + 1) % this.typingPhrases3.length;
    }, 3000);
  },
};
</script>

<style scoped>

img {
  max-width: 100%;
  height: auto;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

.typing-effect {
  overflow: hidden;
  /* Ensures that the text doesn't overflow its container */
}

.typing-effect::after {
  content: "|";
  /* The blinking cursor */
  display: inline-block;
  margin-left: 3px;
  opacity: 1;
  -webkit-animation: typing-cursor 1s infinite;
  animation: typing-cursor 1s infinite;
}

@-webkit-keyframes typing-cursor {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes typing-cursor {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.typing-effect__text {
  display: inline-block;
  animation: typing-text 3s steps(40) 1s forwards;
}

@keyframes typing-text {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.span {
  transition: opacity 0.5s ease-in-out;
}
</style>

