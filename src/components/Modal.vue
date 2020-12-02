<template>
  <div v-if="show" class="_modal d-flex justify-content-center align-items-center">
    <div class="_backdrop" @click="close"></div>
    <div class="_modal-dialog nes-container text-left" :style="{ height, width }">
      <h5><slot name="title"></slot></h5>
      <slot name="body"></slot>
      <slot name="footer">
        <div class="row justify-content-between align-items-end">
          <div class="col-sm-12 col-md-6 order-1 order-md-0">
            <button type="button" class="m-0 nes-btn w-100" @click="close">Cancelar</button>
          </div>
          <div class="col-sm-12 col-md-6 order-0 order-md-1 mb-3 mb-md-0">
            <button type="button" class="m-0 nes-btn is-success w-100" @click="confirm">
              Adicionar
            </button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
  },
  methods: {
    close() {
      this.$emit('update:show', false);
      this.$emit('close', false);
    },

    confirm() {
      this.$emit('confirm');
      this.close();
    },
  },
};
</script>

<style scoped>
._modal {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 696969;
  top: 0;
  left: 0;
}

._modal-dialog {
  max-width: none !important;
}

._backdrop {
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(1, 1, 1, 0.7);
}
</style>
