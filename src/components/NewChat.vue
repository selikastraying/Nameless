<template>
  <div class="d-flex my-3" style="height: 6%; min-height: 6%">
    <div class="d-flex mx-2">
      <label class="d-flex h-100" for="file">
        <img class="h-75 my-auto" src="@/assets/image.svg" alt="" />
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
    <div class="input-group" v-if="fileurl != undefined">
      <div class="form-control h-100 text-left" v-if="fileurl != undefined">
        <img class="h-100" :src="fileurl" alt="" @load="imgload" />
      </div>
      <div class="input-group-append">
        <button class="btn btn-primary ml-2" @click="fileurl = undefined">
          <p class="my-auto" style="line-height: 80%">Cancel</p>
        </button>
        <button class="btn btn-primary mx-2" @click="sentpic">
          <p class="my-auto" style="line-height: 80%">Sent</p>
        </button>
      </div>
    </div>
    <div class="input-group" v-if="fileurl == undefined">
      <input
        type="text"
        class="form-control text-left h-100"
        v-model="newchat"
        placeholder="Chat Here..."
      />
      <div class="input-group-append">
        <button
          class="btn btn-primary mx-2"
          @click="sent"
          :disabled="newchat == ''"
        >
          <p class="my-auto" style="line-height: 80%">Sent</p>
        </button>
      </div>
    </div>
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
      sent: () => {
        NetService.sentChat(
          store.state.chat.token,
          store.state.chat.chatid,
          newchat.value
        ).catch(() => {
          alert('something failed, please try again')
        })
      },
      sentpic: () => {
        NetService.sentpic(
          file.value,
          store.state.chat.token,
          store.state.chat.chatid
        ).catch(() => {
          alert('something failed, please try again')
        })
      },
    }
  },
}
</script>

<style></style>
