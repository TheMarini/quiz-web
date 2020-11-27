<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="nes-container is-rounded is-centered">
      <h3 class="mb-4">Quiz APP</h3>
      <form class="text-left">
        <div class="nes-field form-group">
          <label for="name">Nome Completo</label>
          <input id="name" type="text" class="nes-input" placeholder="Kagemasa Kozuki" />
        </div>
        <div class="nes-field form-group">
          <label for="login">Login</label>
          <input id="login" type="text" class="nes-input" placeholder="konami" />
        </div>
        <div class="nes-field form-group">
          <label for="pwd">Senha</label>
          <input id="pwd" type="password" class="nes-input" placeholder="*****" />
        </div>
        <div class="nes-field form-group">
          <label for="pwd-repeat">Confirmar senha</label>
          <input id="pwd-repeat" type="password" class="nes-input" placeholder="*****" />
        </div>
        <div class="d-flex">
          <button type="button" class="nes-btn is-success btn-block">Registrar</button>
        </div>
        <hr />
        <div class="register text-center">
          <router-link to="login" class="text-reset p-2">Já possuo uma conta</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
