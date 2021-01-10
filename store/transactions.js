export const state = () => ({
  latest_transaction: [],
  sales_summary: [],
})

export const mutations = {
  SET_LATEST_TRANSACTION(state, payload) {
    state.latest_transaction = payload.payments
  },
  REMOVE_LATEST_TRANSACTION(state) {
    state.latest_transaction = []
  },
  SET_SALES_SUMMARY(state, payload) {
    state.sales_summary = payload
  },
  REMOVE_SALES_SUMMARY(state) {
    state.sales_summary = []
  },
}

export const getters = {
  GET_LATEST_TRANSACTION: (state) => {
    return state.latest_transaction
  },
  GET_SALES_SUMMARY: (state) => {
    return state.sales_summary
  },
}

export const actions = {
  async getLatestTransaction({ commit }) {
    const outletId = this.$auth.user.outlet_ids[0]

    await this.$axios
      .$get(`/api/v2/outlets/${outletId}/reports/get_latest_transactions`)
      .then((res) => {
        commit('SET_LATEST_TRANSACTION', res.data)
      })
  },
}
