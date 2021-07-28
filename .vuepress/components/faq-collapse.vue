<!--
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-07-28 10:21:59
 * @LastEditTime: 2021-07-28 11:25:15
-->
<template>
  <div class="faq-collapse">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-container">
      <div class="faq" v-for="(item, index) in faqList" :key="index">
        <h3 class="faq-title">{{ item.title }}</h3>
        <p class="faq-text">{{ item.text }}</p>
        <button class="faq-toggle" @click="toggleFaq(index)">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        {
          title: "Why shouldn't we trust atoms?",
          text: "They make up everything",
        },
        {
          title: "What do you call someone with no body and no nose?",
          text: "Nobody knows.",
        },
        {
          title: "What's the object-oriented way to become wealthy?",
          text: " Inheritance",
        },
        {
          title: "How many tickles does it take to tickle an octopus?",
          text: "Ten-tickles!",
        },
        {
          title: "What is: 1 + 1?",
          text: "Depends on who are you asking.",
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    toggleFaq(index) {
      let FaqList = document.querySelectorAll(".faq-container .faq");
      console.log(FaqList);
      FaqList[index].classList.toggle("active");
    },
  },
};
</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");

* {
  box-sizing: border-box;
}

.faq-collapse {
  font-family: "Muli", sans-serif;
  background-color: #4682b44f;
  height: 60vh;
  overflow: scroll;
}

h1 {
  margin: 50px 0 30px;
  text-align: center;
}

.faq-container {
  max-width: 600px;
  margin: 0 auto;
}

.faq {
  background-color: transparent;
  border: 1px solid #9fa4a8;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
}

.faq.active {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

.faq.active::before,
.faq.active::after {
  content: "\f075";
  font-family: "Font Awesome 5 Free";
  color: #2ecc71;
  font-size: 7rem;
  position: absolute;
  opacity: 0.2;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.faq.active::before {
  color: #3498db;
  top: -10px;
  left: -30px;
  transform: rotateY(180deg);
}

.faq-title {
  margin: 0 35px 0 0;
}

.faq-text {
  display: none;
  margin: 30px 0 0;
}

.faq.active .faq-text {
  display: block;
}

.faq-toggle {
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;
}

.faq-toggle:focus {
  outline: 0;
}

.faq-toggle .fa-times {
  display: none;
}

.faq.active .faq-toggle .fa-times {
  color: #fff;
  display: block;
}

.faq.active .faq-toggle .fa-chevron-down {
  display: none;
}

.faq.active .faq-toggle {
  background-color: #9fa4a8;
}
</style>