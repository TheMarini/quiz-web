<template>
  <div class="home">
    <RandomBackground></RandomBackground>
    <h1>Olá mundo</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import RandomBackground from '@/components/RandomBackground.vue';

export default {
  name: 'Home',
  components: {
    RandomBackground,
  },
};
</script>

<style scoped>
.home {
  color: whitesmoke;
}

.random-background {
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
</style>
