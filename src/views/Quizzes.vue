<template>
  <div class="quizzes container py-4">
    <header>
      <h1 class="title text-center mb-4">Quiz APP</h1>
      <div class="mb-4 text-white row justify-content-between">
        <div class="col-sm-12 col-md-auto">
          <p>Bem vindo <span>Bruno Marini</span> :)</p>
        </div>
        <div class="col-sm-12 col-md-auto">
          <router-link to="/" class="text-reset logout">Sair</router-link>
        </div>
      </div>
    </header>
    <article>
      <div class="mb-4 text-white row justify-content-between">
        <div class="col-sm-12 col-md-auto">
          <h4 class="title mb-4">Meus quizzes</h4>
        </div>
        <div class="col-sm-12 col-md-auto">
          <button type="button" class="m-0 nes-btn is-success">Criar quiz</button>
        </div>
      </div>
      <div class="row">
        <div v-for="quiz in quizzes" :key="quiz.id" class="col-sm-12 col-md-6 pb-4">
          <Quiz
            :id="quiz.id"
            :title="quiz.title"
            :qtd-questions="quiz.qtdQuestions"
            :desc="quiz.desc"
          ></Quiz>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Quiz from '@/components/Quiz.vue';

export default {
  name: 'Quizzes',
  components: {
    Quiz,
  },
  data() {
    return {
      quizzes: [
        {
          id: 1,
          title: 'Título do quiz',
          qtdQuestions: 42,
          desc: "Good morning. Thou hast had a good night's sleep, I hope.",
        },
        {
          id: 2,
          title: 'Título do quiz',
          qtdQuestions: 42,
          desc: "Good morning. Thou hast had a good night's sleep, I hope.",
        },
      ],
    };
  },
};
</script>

<style>
body {
  background-color: #212529;
}

.title {
  color: #2ab7ca;
}

.subtitle {
  color: #cfdbd5;
}

.logout {
  color: #fe4a49 !important;
}
</style>
