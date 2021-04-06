<template>
  <div class="d-flex flex-column h-100 px-3 overflow-auto noscrollbar">
    <div
      class="d-flex flex-column py-3 w-100 h-100"
      v-if="allchatlist.length != 0"
    >
      <h3 class="my-3">All Chat</h3>
      <ul class="list-group flex-fill overflow-auto noscrollbar">
        <li
          class="list-group-item list-group-item-action"
          v-for="chat in allchatlist"
          :key="chat.id"
          @click="joinChat(chat.id, chat.name)"
        >
          {{ chat.name }}
        </li>
      </ul>
    </div>
    <div
      class="d-flex flex-column py-3 w-100 h-100"
      v-if="allchatlist.length == 0"
    >
      <h3 class="my-3">Start Chat</h3>
      <ul class="list-group">
        <li class="list-group-item list-group-item-action">New Chat</li>
        <div class="list-group-item">
          <div class="input-group">
            <input
              type="text"
              class="form-control text-left"
              placeholder="enter chatname"
              v-model="chatname"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary mx-auto"
                @click="createChat"
                :disabled="chatname == ''"
              >
                <p class="my-auto" style="line-height: 80%">Create</p>
              </button>
            </div>
          </div>
        </div>
        <li
          class="list-group-item list-group-item-action"
          @click="updateAllChatList"
        >
          join chat
        </li>
      </ul>
      <h3 class="my-3">My Chat</h3>
      <ul class="list-group flex-fill overflow-auto noscrollbar">
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
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    chatlist: {
      type: Object,
    },
  },
  setup() {
    let chatname = ref('')
    const store = useStore()
    return {
      chatname,
      allchatlist: computed(() => store.state.chat.allchatlist),
      updateChatId: (chatid) => {
        store.dispatch('chat/updateChatId', chatid)
      },
      updateAllChatList: () => {
        store.dispatch('chat/updateAllChatList')
      },
      joinChat: (chatid, chatname) => {
        store.dispatch('chat/joinChat', { chatid: chatid, chatname: chatname })
      },
      createChat: () => store.dispatch('chat/createChat', chatname.value),
    }
  },
}
</script>

<style></style>
