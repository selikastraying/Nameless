<template>
  <div class="d-flex flex-column-reverse px-3 overflow-auto noscrollbar">
    <div class="my-3" v-for="chat in reversechatcontent" :key="chat.id">
      <div class="d-flex justify-content-end" v-if="chat.name == name">
        <div>
          <p class="border rounded-pill p-2 bg-light" v-if="!chat.pic">
            {{ chat.content }}
          </p>
          <img
            style="width: 100px"
            :src="`${baseURL}${chat.pic}`"
            alt=""
            v-if="chat.pic"
          />
        </div>
      </div>
      <div class="d-flex justify-content-start" v-if="chat.name != name">
        <div>
          <p class="text-left mb-0">{{ chat.name }}</p>
          <p
            class="border rounded-pill p-2 bg-light"
            v-if="!chat.pic & (chat.id != '0')"
          >
            {{ chat.content }}
          </p>
          <img
            style="width: 100px"
            :src="`${baseURL}${chat.pic}`"
            alt=""
            v-if="chat.pic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    chatcontent: {
      type: Object,
    },
  },
  setup(props) {
    const store = useStore()
    const baseURL = 'http://192.168.0.12:3000/img/'
    return {
      baseURL,
      reversechatcontent: computed(() => props.chatcontent.slice().reverse()),
      name: computed(() => store.state.chat.name),
    }
  },
}
</script>

<style></style>
