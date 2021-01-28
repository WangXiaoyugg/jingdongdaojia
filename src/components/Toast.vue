<template>
  <div class="toast">
    {{ msg }}
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Toast',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
export function useToastEffect () {
  const toastData = reactive({
    toastVisible: false,
    toastMsg: ''
  })
  const showToast = (msg) => {
    toastData.toastVisible = true
    toastData.toastMsg = msg
    setTimeout(() => {
      toastData.toastVisible = false
      toastData.toastMsg = ''
    }, 1000)
  }
  return { toastData, showToast }
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
