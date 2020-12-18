export const state = () => ({
  transaction: {
    payments: [],
    next_url: '',
    completed: false,
  },
  latest_transaction: [],
})

export const mutations = {
  SET_TRANSACTION(state, payload) {
    state.transaction.payments = payload.payments
    state.transaction.next_url = payload.next_url
    state.transaction.completed = payload.completed
  },
  REMOVE_TRANSACTION(state) {
    state.transaction = []
  },
  SET_LATEST_TRANSACTION(state, payload) {
    state.latest_transaction = payload.payments
  },
  REMOVE_LATEST_TRANSACTION(state) {
    state.latest_transaction = []
  },
}

export const getters = {
  GET_ALL_TRANSACTION: (state) => {
    return state.transaction
  },
  GET_LATEST_TRANSACTION: (state) => {
    return state.latest_transaction
  },
  GET_NEXT_URL: (state) => {
    return state.transaction.next_url
  },
  GET_COMPLETED_STATUS: (state) => {
    return state.transaction.completed
  },
}

export const actions = {
  // GET ALL TRANSACTION
  //...

  // GET LATEST TRANSACTION
  async getLatestTransaction({ commit }) {
    const payload = await this.$axios.$get(
      'https://api.mokapos.com/v2/outlets/247714/reports/get_latest_transactions'
    )
    commit('SET_LATEST_TRANSACTION', payload.data)
  },
}
