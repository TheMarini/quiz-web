<template>
  <router-link :to="`quiz/${id}`" class="text-reset">
    <div class="quiz m-0 nes-container is-rounded is-dark with-title">
      <p class="title">{{ title }} ({{ textQuestions }})</p>
      <p>{{ desc }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Quiz',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    qtdQuestions: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  computed: {
    textQuestions() {
      const qtd = this.qtdQuestions;
      if (qtd === 0) return 'nenhuma questão';
      return qtd === 1 ? `${qtd} questão` : `${qtd} questões`;
    },
  },
};
</script>

<style scoped>
.quiz {
  transition: 0.3s;
  max-width: none !important;
}

.quiz:hover {
  color: #fed766;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(254, 215, 102)" /></svg>');
}

.quiz .title {
  transition: 0.3s;
}

.quiz:hover .title {
  color: #fed766;
}
</style>
