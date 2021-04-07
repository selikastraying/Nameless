<template>
  <div class="d-flex-column w-100 h-100 bg">
    <Chat />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Chat from '@/components/Chat'

export default {
  name: 'Home',
  components: {
    Chat,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    if (store.state.chat.token == null) router.push('/')
  },
}
</script>
