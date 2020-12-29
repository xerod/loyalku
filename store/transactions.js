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
  ADD_PAYMENTS(state, payload) {
    state.transaction.payments = state.transaction.payments.concat(payload)
  },
  SET_COMPLETED(state, payload) {
    state.transaction.completed = payload
  },
  SET_NEXT_URL(state, payload) {
    state.transaction.next_url = payload
  },
  REMOVE_TRANSACTION(state) {
    state.transaction = []
  },
  SET_LATEST_TRANSACTION(state, payload) {
    console.log('Latest Transaction Payload: ' + payload.payments)
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
  // GET CUSTOMER RETENTION RATE
  //...

  // GET REPURCHASING RATE
  //...

  // GET MULTI-PRODUCT PURCHASE RATE
  //
  // if (!!state.transaction.payments)
  //  let value = 0
  //  for loop state.transaction.payments
  //    if(payments.length !== 1){
  //      state.transaction.payments.splice(index, index)
  //    } else {
  //      value++
  //    }
  // else {
  //  return 0
  // }

  // GET LATEST TRANSACTION
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
