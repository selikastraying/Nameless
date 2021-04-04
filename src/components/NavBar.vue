<template>
  <div class="navbar navbar-expand navbar-light bg-light" style="height: 5%">
    <a class="navbar-brand" href="#">NameLess</a>
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
            Dropdown
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
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    return {
      logout: () => {
        store.dispatch('chat/resetstate')
        router.push('/')
      },
    }
  },
}
</script>

<style scoped></style>
