export const state = () => ({
  latest_transaction: [],
  customer_retention_rate: 0,
})

export const mutations = {
  SET_LATEST_TRANSACTION(state, payload) {
    state.latest_transaction = payload.payments
  },
  REMOVE_LATEST_TRANSACTION(state) {
    state.latest_transaction = []
  },
  SET_CUSTOMER_RETENTION_RATE(state, payload) {
    state.customer_retention_rate = payload
  },
  REMOVE_CUSTOMER_RETENTION_RATE(state) {
    state.customer_retention_rate = 0
  },
}

export const getters = {
  GET_LATEST_TRANSACTION: (state) => {
    return state.latest_transaction
  },
  GET_CUSTOMER_RETENTION_RATE: (state) => {
    return state.customer_retention_rate
  },
}

export const actions = {
  async getLatestTransaction({ commit }) {
    const outletId = this.$auth.user.outlet_ids[0]

    await this.$axios
      .$get(
        `https://api.mokapos.com/v2/outlets/${outletId}/reports/get_latest_transactions`
      )
      .then((res) => {
        commit('SET_LATEST_TRANSACTION', res.data)
      })
  },
}
