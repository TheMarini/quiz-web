<template>
  <div class="quizzes container py-4">
    <header>
      <h1 class="title text-center mb-4">Quiz APP</h1>
      <div class="mb-4 text-white d-flex justify-content-between">
        <p>Bem vindo <span>Bruno Marini</span> :)</p>
        <router-link to="/" class="text-reset logout">Sair</router-link>
      </div>
    </header>
    <article>
      <h4 class="title mb-4">Meus quizzes</h4>
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <Quiz></Quiz>
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
