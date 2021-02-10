<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入姓名"
        type="text"
        v-model="username" />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="password" />
    </div>
    <div class="wrapper__login__button" @click="onLogin">登录</div>
    <div class="wrapper__login__link" @click="goRegisterPage">立即注册</div>
  </div>
  <Toast v-if="toastVisible" :msg="toastMsg"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
const useLoginEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({ username: '', password: '' })
  const onLogin = async () => {
    if (!(data.username && data.password)) {
      showToast('姓名或密码不能为空')
      return
    }
    try {
      const result = await post('/user/login', data)
      if (result.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (err) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, onLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const goRegisterPage = () => {
    router.push({ name: 'Register' })
  }
  return { goRegisterPage }
}
export default {
  name: 'Login',
  components: {
    Toast
  },
  // setup函数的职责，就是代码执行的流程逻辑
  setup () {
    const { toastVisible, toastMsg, showToast } = useToastEffect()
    const { goRegisterPage } = useRegisterEffect()
    const { password, username, onLogin } = useLoginEffect(showToast)
    return {
      onLogin,
      goRegisterPage,
      username,
      password,
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
    border-radius: .06rem;
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
