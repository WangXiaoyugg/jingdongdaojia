<template>
  <div class="toast">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  padding: .1rem;
}
</style>
