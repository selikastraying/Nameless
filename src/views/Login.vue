<template>
  <div class="d-flex flex-column w-100 h-100 bg">
    <div class="my-auto px-3">
      <div class="mb-3 mx-auto w-100 border-bottom" style="max-width: 1000px">
        <LoginForm v-if="isLogin" />
        <RegisterForm v-if="!isLogin" />
      </div>
      <a class="mt-3" href="#" @click="isLogin = !isLogin" v-if="isLogin">
        New Account?
      </a>
      <a class="mt-3" href="#" @click="isLogin = !isLogin" v-if="!isLogin">
        Already Registed?
      </a>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  setup() {
    let isLogin = true
    return {
      isLogin,
    }
  },
}
</script>
