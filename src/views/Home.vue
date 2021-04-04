<template>
  <div class="d-flex-column w-100 h-100">
    <NavBar />
    <Chat />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Chat from '@/components/Chat'
import NavBar from '@/components/NavBar'

export default {
  name: 'Home',
  components: {
    Chat,
    NavBar,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    if (store.state.chat.token == null) router.push('/')
  },
}
</script>
