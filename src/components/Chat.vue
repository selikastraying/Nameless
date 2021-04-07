<template>
  <NavBar @update="updateChatId" />
  <div
    class="d-flex flex-column justify-content-end w-100 mx-auto panel"
    style="height: 92%; max-width: 1000px"
  >
    <ChatList
      :chatlist="chatlist"
      v-if="chatid == ''"
      @update="updateChatId"
      @AllChatList="updateAllChatList"
      @createChat="createChat"
    />
    <ChatContent v-if="chatid != ''" />
    <NewChat v-if="chatid != ''" @sentchat="sentchat" @sentpic="sentpic" />
  </div>
</template>

<script>
import ChatList from '@/components/ChatList'
import ChatContent from '@/components/ChatContent'
import NewChat from '@/components/NewChat'
import NavBar from '@/components/NavBar'

import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import SocketIO from 'socket.io-client'

export default {
  components: {
    ChatList,
    ChatContent,
    NewChat,
    NavBar,
  },
  setup() {
    const store = useStore()
    const socket = new SocketIO('http://18.183.223.127:3000')

    socket.on('allMessage', function (message) {
      console.log(message)
      store.dispatch('chat/updateChatContent', message)
    })
    socket.on('newMessage', function (message) {
      console.log(message)
      store.dispatch('chat/addChatContent', message)
    })
    socket.on('AllChatList', function (message) {
      store.dispatch('chat/updateAllChatList', message)
    })

    onMounted(() => {
      store.dispatch('chat/updateChatList')
    })

    return {
      chatid: computed(() => store.state.chat.chatid),
      chatlist: computed(() => store.state.chat.chatlist),
      sentchat: (newchat) => {
        socket.emit('sentMessage', {
          room: store.state.chat.chatid,
          message: {
            name: store.state.chat.name,
            content: newchat,
          },
        })
      },
      sentpic: (pic) => {
        socket.emit('sentMessage', {
          room: store.state.chat.chatid,
          message: {
            name: store.state.chat.name,
            pic: pic,
          },
        })
      },
      updateChatId: (chatid) => {
        if (chatid != '') {
          socket.emit('join', { room: chatid })
        } else {
          socket.emit('leave', { room: store.state.chat.chatid })
        }
        store.dispatch('chat/updateChatId', chatid)
        store.dispatch('chat/updateChatList')
      },
      updateAllChatList: () => {
        socket.emit('AllChatList')
      },
      createChat: (chatname) => {
        socket.emit('createChat', { chatname: chatname })
        socket.emit('join', { room: chatname })
        store.dispatch('chat/updateChatId', chatname)
        store.dispatch('chat/updateChatList')
      },
    }
  },
}
</script>

<style scoped></style>
