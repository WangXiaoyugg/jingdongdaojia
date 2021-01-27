<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入姓名"
        type="text"
        v-model="data.username" />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="data.password" />
    </div>
    <div class="wrapper__login__button" @click="onLogin">登录</div>
    <div class="wrapper__login__link" @click="goRegisterPage">立即注册</div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const data = reactive({
      username: '',
      password: ''
    })
    const onLogin = () => {
      axios.post('https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/user/login', data)
        .then(resp => {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        }).catch((err) => {
          alert('登录失败:', err)
        })
    }
    const goRegisterPage = () => {
      router.push({ name: 'Register' })
    }
    return { onLogin, goRegisterPage, data }
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
