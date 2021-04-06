<template>
  <div
    class="navbar navbar-expand navbar-light panel mx-auto border-bottom"
    style="height: 8%; max-width: 1000px"
  >
    <a
      class="navbar-brand"
      href="#"
      @click="toList"
      v-if="chatid != '' || allchatlist.length != 0"
    >
      ←Back
    </a>
    <a
      class="navbar-brand"
      href="#"
      v-if="(chatid == '') & (allchatlist.length == 0)"
    >
      Nameless
    </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ id }}
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdown"
          >
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">ChatList</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="logout">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    return {
      logout: () => {
        store.dispatch('chat/resetState')
        router.push('/')
      },
      toList: () => {
        store.dispatch('chat/updateChatId', '')
        store.dispatch('chat/clearAllChatList')
      },
      chatid: computed(() => store.state.chat.chatid),
      allchatlist: computed(() => store.state.chat.allchatlist),
      id: computed(() => store.state.chat.name),
    }
  },
}
</script>

<style scoped></style>
