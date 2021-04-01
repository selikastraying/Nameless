<template>
  <div class="h-100 px-3">
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action"
        v-for="chat in chatlist"
        :key="chat.id"
        @click="updateChatId(chat.id)"
      >
        {{ chat.name }}
      </li>
      <li class="list-group-item">New Chat</li>
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
