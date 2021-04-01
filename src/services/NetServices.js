import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://192.168.0.12:3000',
  withCredentials: false,
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // },
  timeout: 10000,
})

export default {
  sentpic(pic, id, chatid) {
    const formData = new FormData()
    formData.append('file', pic)
    formData.append('id', id)
    formData.append('chatid', chatid)
    return apiClient
      .post('/upload', formData)
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  getToken(id) {
    return apiClient
      .get('getToken', { params: { id: id } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getChatList(token) {
    return apiClient
      .get('getChatList', { params: { token: token } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getChatContent(chatid) {
    return apiClient
      .get('getChatContent', { params: { chatid: chatid } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  sentChat(token, chatid, newchat) {
    return apiClient
      .get('sentChat', {
        params: { token: token, chatid: chatid, newchat: newchat },
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  createChat(token, newchat) {
    return apiClient
      .get('createChat', {
        params: { token: token, newchat: newchat },
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  login(id, pass) {
    return apiClient
      .get('login', {
        params: { id: id, pass: pass },
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  register(id, pass) {
    return apiClient
      .get('register', {
        params: { id: id, pass: pass },
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
