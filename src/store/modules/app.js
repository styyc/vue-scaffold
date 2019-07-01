
const state = {
  msg: 'this msg is from vuex'
}
const getters = {
  computedMsg: state => {
    return state.msg.split('').reverse().join('')
  }
}

const actions = {
  asyncchangeMsg ({ commit }, params) {
    commit('changeMsg', params)
    return state.msg
  }
}

const mutations = {
  changeMsg (state, params) {
    state.msg = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
