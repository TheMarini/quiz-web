<template>
  <div
    class="random-background d-flex align-items-end"
    :style="{ backgroundImage: `url(${path})` }"
  >
    <a :href="social" target="_blank" class="p-3 text-muted">{{ author }}</a>
  </div>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import bgs from '@/assets/backgrounds/backgrounds.json';

export default {
  name: 'RandomBackground',
  data() {
    return {
      author: '',
      social: '',
      directory: '',
      image: '',
    };
  },
  computed: {
    path() {
      return require(`@/assets/backgrounds/${this.directory}/${this.image}`);
    },
  },
  created() {
    const author = bgs[this.randomNumber(0, bgs.length - 1)];

    this.author = author.author;
    this.social = author.social;
    this.directory = author.directory;
    this.image = author.images[this.randomNumber(0, author.images.length - 1)];
  },
  methods: {
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>

<style scoped>
.random-background {
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
