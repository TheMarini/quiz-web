<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="nes-container is-rounded is-centered">
      <h3 class="mb-4">Quiz APP</h3>
      <form class="text-left">
        <div class="nes-field form-group">
          <label for="name" class="nes-text" :class="nameClass">Nome Completo</label>
          <input
            id="name"
            v-model="name"
            autocomplete="name"
            type="text"
            class="nes-input"
            :class="nameClass"
            placeholder="Kagemasa Kozuki"
          />
        </div>
        <div class="nes-field form-group">
          <label for="login" class="nes-text" :class="loginClass">Login</label>
          <input
            id="login"
            v-model="login"
            autocomplete="off"
            type="text"
            class="nes-input"
            :class="loginClass"
            placeholder="konami"
          />
        </div>
        <div class="nes-field form-group">
          <label for="pwd" class="nes-text" :class="pwdClass">Senha</label>
          <input
            id="pwd"
            v-model="pwd"
            type="password"
            class="nes-input"
            :class="pwdClass"
            placeholder="*****"
          />
        </div>
        <div class="nes-field form-group">
          <label for="pwd-repeat" class="nes-text" :class="pwdRepeatClass">Confirmar senha</label>
          <input
            id="pwd-repeat"
            v-model="pwdRepeat"
            :class="pwdRepeatClass"
            type="password"
            class="nes-input"
            placeholder="*****"
          />
          <span v-show="pwdRepeatClass === 'is-error'" class="pwd-repeat-error nes-text is-error"
            >As senhas não são iguais</span
          >
        </div>
        <div class="d-flex">
          <button type="button" class="nes-btn btn-block is-success" @click="register">
            Registrar
          </button>
        </div>
        <hr />
        <div class="login text-center">
          <router-link to="login" class="text-reset p-2">Já possuo uma conta</router-link>
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
      name: null,
      login: null,
      pwd: null,
      pwdRepeat: null,
    };
  },
  computed: {
    nameClass() {
      if (this.name !== null) return this.name.length !== 0 ? 'is-success' : 'is-error';
      return '';
    },
    loginClass() {
      if (this.login !== null) return this.login.length !== 0 ? 'is-success' : 'is-error';
      return '';
    },
    pwdClass() {
      if (this.pwd !== null) return this.pwd.length !== 0 ? 'is-success' : 'is-error';
      return '';
    },
    pwdRepeatClass() {
      if (this.pwdRepeat !== null)
        return this.pwdRepeat.length !== 0 && this.pwdRepeat === this.pwd
          ? 'is-success'
          : 'is-error';
      return '';
    },
    btnDisabled() {
      return (
        this.name.length === 0 ||
        this.login.length === 0 ||
        this.pwd.length === 0 ||
        this.pwdRepeat.length === 0
      );
    },
    btnClass() {
      return this.btnDisabled ? 'is-disabled' : 'is-success';
    },
  },
  methods: {
    register() {
      this.btnClicked = true;
    },
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

.login {
  font-size: 0.8rem;
}

.pwd-repeat-error {
  font-size: 0.8rem;
}
</style>
