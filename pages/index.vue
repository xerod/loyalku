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
        <logo pl="4" width="140" height="40" />
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
            >Sorry, we can't identify your access 😞
          </c-heading>

          <c-text mb="6" text-align="left" color="gray.700">
            Jika ini pertama kalinya kamu menggunakan Loyalku, silahkan
            sambungkan aplikasi Loyalku dengan MOKA.
          </c-text>

          <c-list spacing="3" text-align="left" mb="10" color="gray.500">
            <c-list-item display="flex" align-items="center">
              <c-list-icon icon="check-circle" color="gray.500" mr="4" />
              <c-text>
                Loyalku hanya membaca data transaksi dan data pelanggan pada
                MOKA
              </c-text>
            </c-list-item>
            <c-list-item display="flex" align-items="center">
              <c-list-icon icon="check-circle" color="gray.500" mr="4" />
              <c-text>
                Loyalku menyajikan data dan gambaran umum berdasarkan data-data
                tersebut
              </c-text>
            </c-list-item>
            <c-list-item display="flex" align-items="center">
              <c-list-icon icon="check-circle" color="gray.500" mr="4" />
              <c-text>
                Aplikasi Loyalku tidak pernah mengirimkan data apapun kemanapun
              </c-text>
            </c-list-item>
            <c-list-item display="flex" align-items="center">
              <c-list-icon icon="check-circle" color="gray.500" mr="4" />
              <c-text>
                Data transaksi yang Loyalku gunakan tidak pernah meninggalkan
                perangkatmu
              </c-text>
            </c-list-item>
          </c-list>
          <c-button
            variant-color="blue"
            size="md"
            @click="$auth.loginWith('moka')"
            >Connect with MOKA</c-button
          >
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
  layout: 'landing',
  auth: false,
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
  // mounted() {
  //   if (this.$auth.loggedIn) {
  //     this.$router.push({
  //       path: '/dashboard',
  //     })
  //   }
  // },
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
  },
}
</script>
