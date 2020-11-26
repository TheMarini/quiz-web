<template>
  <div class="home vh-100 d-flex justify-content-center align-items-center">
    <RandomBackground></RandomBackground>
    <div class="container d-flex justify-content-center align-items-center">
      <div class="nes-container is-rounded is-centered">
        <h3 class="mb-4">Quiz APP</h3>
        <form class="text-left">
          <div class="nes-field form-group">
            <label for="login">Login</label>
            <input id="login" type="text" class="nes-input" placeholder="konami" />
          </div>
          <div class="nes-field form-group">
            <label for="pwd">Senha</label>
            <input id="pwd" type="password" class="nes-input" placeholder="*****" />
          </div>
          <div class="d-flex">
            <button type="button" class="nes-btn is-primary btn-block">Entrar</button>
          </div>
          <hr />
          <div class="register text-center">
            <router-link to="register" class="text-reset p-2">
              Ainda não possuo uma conta
            </router-link>
          </div>
        </form>
      </div>
    </div>
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
.container {
  z-index: 1;
  position: relative;
}

.random-background {
  z-index: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
}

.nes-container {
  max-width: 500px;
  background-color: white;
}

.register {
  font-size: 0.8rem;
}
</style>
