export default ({ store, app: { $axios } }) => {
  $axios.onRequest((config) => {
    console.log(`[${config.method}] ${config.url}`)
    console.log(config.query)
  })
  $axios.onResponse((response) => {
    console.log('\x1b[32m', `[${response.status}] ${response.request.path}`)
  })

  $axios.onError((err) => {
    console.log(
      `[${err.response && err.response.status}] ${
        err.response && err.response.request.path
      }`
    )
    console.log(err.response && err.response.data)
  })
}
