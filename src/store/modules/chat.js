import NetServices from '@/services/NetServices.js'

export const namespaced = true

export const state = {
  name: '',
  token: null,
  chatlist: [],
  chatid: '00000001',
  chatcontent: [],
}

export const mutations = {
  SET_NAME(state, name) {
    state.name = name
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_CHATLIST(state, chatlist) {
    state.chatlist = chatlist
  },
  SET_CHATID(state, chatid) {
    state.chatid = chatid
  },
  SET_CHATCONTENT(state, chatcontent) {
    state.chatcontent = chatcontent
  },
}

export const actions = {
  login({ commit }, { id, pass }) {
    return NetServices.login(id, pass)
      .then((token) => {
        commit('SET_NAME', id)
        commit('SET_TOKEN', token)
      })
      .catch((error) => {
        throw error
      })
  },
  register({ commit }, { id, pass }) {
    return NetServices.register(id, pass)
      .then((token) => {
        commit('SET_NAME', id)
        commit('SET_TOKEN', token)
      })
      .catch((error) => {
        throw error
      })
  },
  updateChatList({ state, commit }) {
    NetServices.getChatList(state.token).then((chatlist) => {
      commit('SET_CHATLIST', chatlist)
    })
  },
  updateChatId({ commit }, chatid) {
    commit('SET_CHATID', chatid)
  },
  updateChatContent({ state, commit }) {
    NetServices.getChatContent(state.chatid).then((chatcontent) => {
      commit('SET_CHATCONTENT', chatcontent.chat)
    })
  },
  resetState({ commit }) {
    commit('SET_NAME', '')
    commit('SET_TOKEN', null)
  },
}

export const getters = {
  getName: (state) => {
    return state.name
  },
  getToken: (state) => {
    return state.token
  },
}
