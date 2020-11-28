<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="nes-container is-rounded is-centered">
      <h3 class="mb-4">Quiz APP</h3>
      <form class="text-left">
        <div class="nes-field form-group">
          <label for="login">Login</label>
          <input
            id="login"
            v-model="login"
            autocomplete="off"
            type="text"
            class="nes-input"
            placeholder="konami"
          />
        </div>
        <div class="nes-field form-group">
          <label for="pwd">Senha</label>
          <input id="pwd" v-model="pwd" type="password" class="nes-input" placeholder="*****" />
        </div>
        <div class="d-flex">
          <button
            type="button"
            :disabled="btnDisabled"
            class="nes-btn btn-block"
            :class="btnClass"
            @click="doLogin"
          >
            Entrar
          </button>
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
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      pwd: '',
    };
  },
  computed: {
    btnDisabled() {
      return this.login.length === 0 || this.pwd.length === 0;
    },
    btnClass() {
      return this.btnDisabled ? 'is-disabled' : 'is-primary';
    },
  },
  methods: {
    doLogin() {},
  },
};
</script>

<style>
.container {
  z-index: 1;
  position: relative;
}

.nes-container {
  max-width: 500px;
  background-color: white;
}

.register {
  font-size: 0.8rem;
}
</style>
