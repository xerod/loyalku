export const state = () => ({
  user: [],
})

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
  remove(state) {
    state.user = []
  },
}

export const getters = {
  GET_USER: (state) => {
    return state.user
  },
}

export const actions = {
  async getUserData({ commit }) {
    const payload = await this.$axios.$get(
      'https://api.mokapos.com/v1/profile/self'
    )
    commit('SET_USER', payload)
  },
}
