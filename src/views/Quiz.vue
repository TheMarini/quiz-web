<template>
  <div class="quiz container py-4">
    <header class="mb-4 text-white row justify-content-between">
      <div class="col-auto">
        <router-link to="/quiz" class="text-reset">
          <button type="button" class="m-0 nes-btn">voltar</button>
        </router-link>
      </div>
      <div class="col-auto">
        <router-link to="" class="text-reset">
          <button type="button" class="m-0 nes-btn is-primary">Compartilhar</button>
        </router-link>
        <router-link to="" class="text-reset">
          <button type="button" class="m-0 nes-btn is-success">Salvar</button>
        </router-link>
      </div>
    </header>
    <form class="text-white">
      <section class="infos">
        <div>
          <p class="text-blue">
            Autor: <span class="text-white">{{ author }}</span> <br />Data de Criação:
            <span class="text-white">{{ createdAt }}</span>
          </p>
          <p></p>
        </div>
        <div class="nes-field form-group">
          <label for="title" class="nes-text" :class="titleClass">Título</label>
          <input
            id="title"
            v-model="title"
            type="text"
            class="nes-input is-dark"
            :class="titleClass"
          />
        </div>
        <div class="nes-field form-group">
          <label for="desc" class="nes-text" :class="descClass">Descrição</label>
          <textarea
            id="desc"
            v-model="desc"
            class="nes-textarea is-dark"
            :class="descClass"
          ></textarea>
        </div>
        <div class="nes-field form-group">
          <label for="subject" class="nes-text">Assunto</label>
          <div class="nes-select is-dark">
            <select id="subject" v-model="subject">
              <option value="null" disabled selected hidden>Selecione uma opção...</option>
              <option value="0">Gerência de Configuração e Evolução de Software</option>
              <option value="1">Engenharia de Processes de Software</option>
            </select>
          </div>
        </div>
      </section>
      <section class="mt-4">
        <header class="row justify-content-between">
          <div class="col-auto">
            <h4 class="text-blue">Questões</h4>
          </div>
          <div class="col-auto">
            <h4 class="text-white">
              {{ qtdQuestions }}
            </h4>
          </div>
        </header>
        <Question v-for="index in qtdQuestions" :key="index"></Question>
        <div class="d-flex justify-content-center">
          <button type="button" class="m-0 nes-btn is-primary mb-4" @click="qtdQuestions++">
            Adicionar questão
          </button>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import Question from '@/components/Question.vue';

export default {
  name: 'Quiz',
  components: {
    Question,
  },
  data() {
    return {
      author: 'Bruno Marini',
      createdAt: '28/11/2020',
      title: null,
      desc: null,
      subject: null,
      qtdQuestions: 0,
    };
  },
  computed: {
    titleClass() {
      if (this.title !== null) return this.title.length !== 0 ? 'is-success' : 'is-error';
      return '';
    },
    descClass() {
      if (this.desc !== null) return this.desc.length !== 0 ? 'is-success' : 'is-error';
      return '';
    },
    subjectClass() {
      return this.subject !== null ? 'is-success' : '';
    },
  },
};
</script>

<style scoped>
.quiz {
  height: 100vh;
  width: 100vw;
  position: reltive;
}

.nes-container {
  max-width: none;
}
</style>
