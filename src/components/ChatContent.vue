<template>
  <div class="px-3">
    <div class="my-3" v-for="chat in chatcontent" :key="chat.id">
      <div class="d-flex justify-content-end" v-if="chat.name == name">
        <span class="border rounded-pill">
          {{ chat.content }}
        </span>
      </div>
      <div class="d-flex justify-content-start" v-if="chat.name != name">
        <span class="border rounded-pill">
          {{ chat.content }}
        </span>
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
  setup() {
    const store = useStore()
    return {
      name: computed(() => store.state.chat.name),
    }
  },
}
</script>

<style></style>
