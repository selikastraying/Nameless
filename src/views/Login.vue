<template>
  <div class="d-flex-column w-100 h-100">
    <NavBar />
    <LoginForm v-if="isLogin" />
    <a class="mt-3" href="#" @click="isLogin = !isLogin" v-if="isLogin">
      New Account?
    </a>
    <RegisterForm v-if="!isLogin" />
    <a class="mt-3" href="#" @click="isLogin = !isLogin" v-if="!isLogin">
      Already Registed?
    </a>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'

export default {
  components: {
    LoginForm,
    NavBar,
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
