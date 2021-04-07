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
  sentpic(pic, token, chatid) {
    const formData = new FormData()
    formData.append('file', pic)
    formData.append('token', token)
    formData.append('chatid', chatid)
    return apiClient
      .post('/upload', formData)
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        throw error
      })
  },
  getToken(id) {
    return apiClient
      .get('getToken', { params: { id: id } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        throw error
      })
  },
  getChatList(token) {
    return apiClient
      .get('getChatList', { params: { token: token } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        throw error
      })
  },
  getAllChatList() {
    return apiClient
      .get('getAllChatList')
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        throw error
      })
  },
  getChatContent(chatid) {
    return apiClient
      .get('getChatContent', { params: { chatid: chatid } })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        throw error
      })
  },
  joinChat(token, chatid) {
    return apiClient
      .get('joinChat', {
        params: { token: token, chatid: chatid },
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        throw error
      })
  },
  createChat(token, chatname) {
    return apiClient
      .get('createChat', {
        params: { token: token, chatname: chatname },
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        throw error
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
        throw error
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
        throw error
      })
  },
}
