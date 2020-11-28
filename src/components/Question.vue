<template>
  <div class="question nes-container is-dark is-rounded">
    <div class="nes-field form-group">
      <label for="title" class="nes-text">Título</label>
      <input id="title" v-model="title" type="text" class="nes-input is-dark" />
    </div>
    <div class="nes-field form-group">
      <label for="desc" class="nes-text">Descrição</label>
      <textarea id="desc" v-model="desc" class="nes-textarea is-dark"></textarea>
    </div>

    <label class="nes-text">Alternativas</label>
    <div
      v-for="(item, index) in alternatives"
      :key="index"
      class="nes-field form-row align-items-center mb-2"
    >
      <div class="col-1">
        <label>
          <input type="radio" class="nes-radio is-dark" name="answer-dark" />
          <span>{{ getLetter(index) }}</span>
        </label>
      </div>
      <div class="col-11">
        <input :id="`alternative-${index}`" type="text" class="nes-input is-dark" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  data() {
    return {
      title: null,
      desc: null,
      alternatives: ['A', 'B', 'C', 'D'],
    };
  },
  methods: {
    getLetter(index) {
      switch (index) {
        case 0:
          return 'A:';
        case 1:
          return 'B:';
        case 2:
          return 'C:';
        case 3:
          return 'D:';

        default:
          return '-';
      }
    },
  },
};
</script>

<style scoped></style>
