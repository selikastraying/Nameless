<template>
  <div class="d-flex my-3" style="height: 10%">
    <div class="mx-3">
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
    <img class="mh-100" :src="file" alt="" @load="imgload" />
    <button class="mx-3" @click="sentpic" v-if="file != undefined">Sent</button>
    <!-- <input class="mr-3" type="text" v-model="filename" /> -->
    <input
      type="text"
      class="flex-fill"
      v-model="newchat"
      v-if="file == undefined"
    />
    <button class="mx-3" @click="sent" v-if="file == undefined">Sent</button>
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
    let newchat = ref('')
    const reader = new FileReader()
    reader.onload = (e) => {
      let img = new Image()
      img.onload = (e) => {
        if (e.target.width > 1000) alert('over max width 1000')
        else file.value = e.target.src
      }
      img.src = e.target.result
    }

    return {
      file,
      newchat,
      change: (event) => {
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
        NetService.sentpic(file.value).then((res) => {
          console.log(res)
        })
      },
    }
  },
}
</script>

<style></style>
