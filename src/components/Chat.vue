<template>
  <div class="d-flex flex-column justify-content-end" style="height: 95%">
    <ChatList :chatlist="chatlist" v-if="false" />
    <ChatContent :chatcontent="chatcontent" />
    <NewChat />
  </div>
</template>

<script>
import ChatList from '@/components/ChatList'
import ChatContent from '@/components/ChatContent'
import NewChat from '@/components/NewChat'

import { onMounted, onBeforeUnmount, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    ChatList,
    ChatContent,
    NewChat,
  },
  setup() {
    const store = useStore()
    let timeid = null

    onMounted(() => {
      // store.dispatch('chat/login', 'selina')
      timeid = setInterval(() => {
        store.dispatch('chat/updateChatList')
        store.dispatch('chat/updateChatContent')
      }, 100)
    })

    onBeforeUnmount(() => {
      clearInterval(timeid)
    })

    return {
      chatlist: computed(() => store.state.chat.chatlist),
      chatcontent: computed(() => store.state.chat.chatcontent),
    }
  },
}
</script>

<style></style>
