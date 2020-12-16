export default function ({ store, app: { $axios } }) {
  $axios.onRequest((config) => {
    config.headers['Authorization'] = `Bearer ` + store.state.auth.token
  })
}
