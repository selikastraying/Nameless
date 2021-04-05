<template>
  <div>
    <h1>Nameless</h1>
    <label class="my-3" for="id">Name</label>
    <input
      type="text"
      class="form-control my-3"
      id="id"
      placeholder="Enter Name"
      v-model="id"
    />
    <label class="my-3" for="Password">Password</label>
    <input
      type="password"
      class="form-control my-3"
      id="Password"
      placeholder="Password"
      v-model="pass"
    />
    <button type="submit" class="btn btn-primary my-3" @click="register">
      Register
    </button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    let id = ref('')
    let pass = ref('')

    return {
      id,
      pass,
      register: () => {
        store
          .dispatch('chat/register', { id: id.value, pass: pass.value })
          .then(() => {
            router.push('/Home')
          })
          .catch(() => {
            alert('register failed')
          })
      },
    }
  },
}
</script>

<style></style>
