<template>
  <div class="d-flex my-3" style="height: 10%; min-height: 5%">
    <div class="d-flex mx-3">
      <label class="h-75 my-auto" for="file">
        <img class="h-100" src="@/assets/image.svg" alt="" />
        <!-- <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
      </label>
      <input
        type="file"
        accept=".jpg,.png"
        style="width: 0"
        id="file"
        name="file"
        @change="change"
      />
    </div>
    <div class="flex-fill h-100" v-if="fileurl != undefined">
      <img class="h-100" :src="fileurl" alt="" @load="imgload" />
    </div>
    <button class="mx-3" @click="sentpic" v-if="fileurl != undefined">
      Sent
    </button>
    <!-- <input class="mr-3" type="text" v-model="filename" /> -->
    <input
      type="text"
      class="flex-fill"
      v-model="newchat"
      v-if="fileurl == undefined"
    />
    <button class="mx-3" @click="sent" v-if="fileurl == undefined">Sent</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import NetService from '@/services/NetServices'

export default {
  setup() {
    const store = useStore()
    let file = ref()
    let fileurl = ref()
    let newchat = ref('')
    const reader = new FileReader()
    reader.onload = (e) => {
      let img = new Image()
      img.onload = (e) => {
        if (e.target.width > 1000) alert('over max width 1000')
        else {
          fileurl.value = e.target.src
        }
      }
      img.src = e.target.result
    }

    return {
      fileurl,
      newchat,
      change: (event) => {
        file.value = event.target.files[event.target.files.length - 1]
        reader.readAsDataURL(event.target.files[0])
      },
      imgload: (e) => {
        console.log(e.target)
      },
      sent: () => {
        NetService.sentChat(
          store.state.chat.token,
          store.state.chat.chatid,
          newchat.value
        )
      },
      sentpic: () => {
        NetService.sentpic(
          file.value,
          store.state.chat.token,
          store.state.chat.chatid
        ).then((res) => {
          console.log(res)
        })
      },
    }
  },
}
</script>

<style></style>
