<template>
  <div class="d-flex flex-column h-100 px-3">
    <h3 class="my-3">Start Chat</h3>
    <ul class="list-group">
      <li class="list-group-item list-group-item-action">New Chat</li>
      <li class="list-group-item list-group-item-action">Join Chat</li>
    </ul>
    <h3 class="my-3">My Chat</h3>
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action"
        v-for="chat in chatlist"
        :key="chat.id"
        @click="updateChatId(chat.id)"
      >
        {{ chat.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: {
    chatlist: {
      type: Object,
    },
  },
  setup() {
    const store = useStore()
    return {
      updateChatId: (chatid) => {
        store.dispatch('chat/updateChatId', chatid)
      },
    }
  },
}
</script>

<style></style>
