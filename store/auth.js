export const state = () => ({
  token: null,
})

export const mutations = {
  add(state, text) {
    state.token = text
  },
  remove(state) {
    state.token = null
  },
}
