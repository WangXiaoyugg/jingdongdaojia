<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入姓名"
        type="text"
        v-model="username"
      >
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="password"
      >
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请再次输入密码"
        type="password"
        v-model="ensurement"
      >
    </div>
    <div class="wrapper__login__button" @click="onRegister">注册</div>
    <div class="wrapper__login__link" @click="goLoginPage">已有账号立即登录</div>
  </div>
  <Toast v-if="toastVisible" :msg="toastMsg"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })

  const onRegister = async () => {
    if (!(data.username && data.password && data.ensurement)) {
      showToast('姓名或密码不能为空')
      return
    }
    try {
      const result = await post('/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return {
    username,
    password,
    ensurement,
    onRegister
  }
}
const useLoginEffect = () => {
  const router = useRouter()
  const goLoginPage = () => {
    router.push({ name: 'Login' })
  }
  return { goLoginPage }
}
export default {
  components: { Toast },
  name: 'Login',
  setup () {
    const { toastVisible, toastMsg, showToast } = useToastEffect()
    const { goLoginPage } = useLoginEffect()
    const { username, password, ensurement, onRegister } = useRegisterEffect(showToast)
    return {
      goLoginPage,
      password,
      username,
      ensurement,
      onRegister,
      toastVisible,
      toastMsg
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background:#f9f9f9;
    border: 1px solid rgba(0,0,0,.10);
    border-radius: 6px;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-font-color;
      &::placeholder {
        color: $content-notice-font-color;
      }
    }
  }
  &__login__button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0 rgba(0, 145, 255, .32);
    border-radius: .04rem;
    border-radius: .04rem;
    color:#fff;
    font-size: .16rem;
    text-align: center;
  }
  &__login__link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-font-color;
  }
}
</style>
