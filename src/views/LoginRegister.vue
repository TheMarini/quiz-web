<template>
  <div class="home vh-100 d-flex justify-content-center align-items-center">
    <RandomBackground></RandomBackground>
    <Login v-if="login"></Login>
    <Register v-else></Register>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import RandomBackground from '@/components/RandomBackground.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

export default {
  name: 'Home',
  components: {
    RandomBackground,
    Login,
    Register,
  },
  props: {
    login: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.random-background {
  z-index: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
</style>
