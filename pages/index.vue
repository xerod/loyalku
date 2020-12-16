<template>
  <div class="container">
    <c-box
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
    >
      <c-flex p="3" w="100%" justify="space-between">
        <logo pl="4" width="140" />
        <c-icon-button
          :icon="colorMode === 'light' ? 'moon' : 'sun'"
          :aria-label="`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`"
          @click="toggleColorMode"
        />
      </c-flex>
      <c-flex justify="center">
        <c-box
          :bg="colorMode === 'light' ? 'white' : 'gray.700'"
          :border-color="colorMode === 'light' ? 'gray.200' : 'gray.600'"
          maxW="lg"
          border-width="1px"
          boxShadow="md"
          rounded="lg"
          overflow="hidden"
          text-align="center"
          p="8"
        >
          <c-heading as="h1" size="xl" text-align="center" mb="4"
            >We can't identify you 😞
          </c-heading>
          <c-text mb="10"
            >Untuk mengakses dashboard mu, kamu perlu mengatur akses via
            backoffice MOKA. Apabila ini pertama kali kamu menggunakan Loyalku,
            silahkan sambungkan
          </c-text>
          <c-link
            href="https://backoffice.mokapos.com/apps/7a49f9caa9daeeec623470b760a9d200caa065248be4a0be2722476f558bcb2f/learn-more"
            is-external
          >
            <c-button variant-color="blue" size="md"
              >Connect with MOKA</c-button
            >
          </c-link>
        </c-box>
      </c-flex>
    </c-box>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    Logo,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {
      mainStyles: {
        dark: {
          bg: 'gray.800',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'white',
          color: 'gray.900',
        },
      },
      showPassword: false,
    }
  },
  mounted() {
    if (!!this.$route.query.code) {
      this.fetchToken(this.$route.query.code)

      this.$router.push({
        path: '/dashboard',
      })
    }
  },
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
    theme() {
      return this.$chakraTheme()
    },
    toggleColorMode() {
      return this.$toggleColorMode
    },
    authToken() {
      return this.$store.state.auth.token
    },
  },
  methods: {
    async fetchToken(auth_code) {
      await this.$axios
        .$post('https://api.mokapos.com/oauth/token', {
          client_id:
            '7a49f9caa9daeeec623470b760a9d200caa065248be4a0be2722476f558bcb2f',
          client_secret:
            '77fe02e532b7c4c035de97f83ab320a5725f6ce97d336244228f8366dc89fbb5',
          code: auth_code,
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000',
        })
        .then(
          (response) => {
            console.log(response)
            this.addAuthToken(response.access_token)
          },
          (error) => {
            this.error = e.response.data.error_description
          }
        )
    },
    addAuthToken(token) {
      this.$store.commit('auth/add', token)
    },
    ...mapMutations({
      remove: 'auth/remove',
    }),
  },
}
</script>
