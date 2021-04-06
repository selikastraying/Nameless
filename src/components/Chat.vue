<template>
  <div
    class="d-flex flex-column justify-content-end w-100 mx-auto panel"
    style="height: 92%; max-width: 1000px"
  >
    <ChatList :chatlist="chatlist" v-if="chatid == ''" />
    <ChatContent :chatcontent="chatcontent" v-if="chatid != ''" />
    <NewChat v-if="chatid != ''" />
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
      timeid = setInterval(() => {
        store.dispatch('chat/updateChatList')
        if (store.state.chat.chatid != '')
          store.dispatch('chat/updateChatContent')
        else store.dispatch('chat/clearChatContent')
      }, 100)
    })

    onBeforeUnmount(() => {
      clearInterval(timeid)
    })

    return {
      chatid: computed(() => store.state.chat.chatid),
      chatlist: computed(() => store.state.chat.chatlist),
      chatcontent: computed(() => store.state.chat.chatcontent),
    }
  },
}
</script>

<style scoped></style>
